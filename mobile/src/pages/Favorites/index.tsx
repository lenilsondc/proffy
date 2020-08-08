import React, { useState, useCallback } from "react";
import { AsyncStorage } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { Container, TeachersFlatList } from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((value) => {
      const favs = JSON.parse(value || "[]") as Teacher[];

      setFavorites(favs);
    });
  }

  return (
    <Container>
      <PageHeader title="My favorite Proffys" />

      <TeachersFlatList
        data={favorites}
        renderItem={({ item }) => (
          <TeacherItem key={item.id} teacher={item} favorited />
        )}
      />
    </Container>
  );
};

export default Favorites;
