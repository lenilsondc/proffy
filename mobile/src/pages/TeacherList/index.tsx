import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

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
} from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import { BorderlessButton } from "react-native-gesture-handler";

const TeacherList: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  function toggleShowFilter() {
    setShowFilter(!showFilter);
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
            <Input placeholder="Subject" />

            <InputGroup>
              <InputBlock>
                <Label>Weekday</Label>
                <Input placeholder="Weekday" />
              </InputBlock>
              <InputBlock>
                <Label>Time</Label>
                <Input placeholder="Time" />
              </InputBlock>
            </InputGroup>

            <SubmitButton>
              <SubmitButtonText>Search</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeachersFlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <TeacherItem />}
      />
    </Container>
  );
};

export default TeacherList;
