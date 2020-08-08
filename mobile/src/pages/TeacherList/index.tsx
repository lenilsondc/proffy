import React, { useState, useEffect, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, AsyncStorage, View } from "react-native";

import {
  Container,
  TeachersFlatList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
  EmptyState,
  EmptyStateText,
  PickerContainer,
  TimePickerButton,
} from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { BorderlessButton } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import api from "../../services/api";

const TeacherList: React.FC = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [subject, setSubject] = useState("Arts");
  const [weekday, setWeekday] = useState("1");
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  function toggleShowFilter() {
    setShowFilter(!showFilter);
  }

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((value) => {
      const favs = JSON.parse(value || "[]") as Teacher[];

      setFavorites(favs.map((fav) => fav.id));
    });
  }

  async function submitSearchForm() {
    loadFavorites();
    const { data } = await api.get("classes", {
      params: { subject, weekday, time: formatted(time) },
    });

    setTeachers(data);
    setShowFilter(false);
  }

  function formatted(time: Date) {
    const timeString = time.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });

    return timeString.substring(0, 5);
  }

  return (
    <Container>
      <PageHeader
        title="Available Proffys"
        headerRight={
          <BorderlessButton style={{ padding: 8 }} onPress={toggleShowFilter}>
            <Feather
              name="filter"
              size={20}
              color={showFilter ? "#d4c2ff" : "#fff"}
            />
          </BorderlessButton>
        }
      >
        {showFilter && (
          <SearchForm>
            <Label>Subject</Label>
            <PickerContainer>
              <Picker
                selectedValue={subject}
                onValueChange={(itemValue) => setSubject(itemValue.toString())}
              >
                <Picker.Item value="Arts" label="Arts" />
                <Picker.Item value="Biology" label="Biology" />
                <Picker.Item value="Sciences" label="Sciences" />
                <Picker.Item
                  value="Physical  Education"
                  label="Physical Education"
                />
                <Picker.Item value="Physics" label="Physics" />
                <Picker.Item value="Geography" label="Geography" />
                <Picker.Item value="History" label="History" />
                <Picker.Item value="English" label="English" />
                <Picker.Item value="Chemistry" label="Chemistry" />
              </Picker>
            </PickerContainer>

            <InputGroup>
              <InputBlock>
                <Label>Weekday</Label>
                <PickerContainer>
                  <Picker
                    selectedValue={weekday}
                    onValueChange={(itemValue) =>
                      setWeekday(itemValue.toString())
                    }
                  >
                    <Picker.Item value="0" label="Sunday" />
                    <Picker.Item value="1" label="Monday" />
                    <Picker.Item value="2" label="Tuesday" />
                    <Picker.Item value="3" label="Wednesday" />
                    <Picker.Item value="4" label="Thursday" />
                    <Picker.Item value="5" label="Friday" />
                    <Picker.Item value="6" label="Saturday" />
                  </Picker>
                </PickerContainer>
              </InputBlock>
              <InputBlock>
                <Label>Time</Label>
                <TimePickerButton onPress={() => setShowTimePicker(true)}>
                  <Text style={{ fontSize: 16 }}>{formatted(time)}</Text>
                </TimePickerButton>
                <DateTimePickerModal
                  isVisible={showTimePicker}
                  mode="time"
                  date={time}
                  onConfirm={(date) => {
                    setShowTimePicker(false);
                    setTime(date);
                  }}
                  onCancel={() => setShowTimePicker(true)}
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={submitSearchForm}>
              <SubmitButtonText>Search</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      {!showFilter && teachers.length === 0 ? (
        <EmptyState>
          <EmptyStateText>
            No results to be shown, use the filter to find Proffys
          </EmptyStateText>
        </EmptyState>
      ) : (
        <TeachersFlatList
          data={teachers}
          renderItem={({ item }) => (
            <TeacherItem
              key={String(item.id)}
              teacher={item}
              favorited={favorites.includes(item.id)}
            />
          )}
        />
      )}
    </Container>
  );
};

export default TeacherList;
