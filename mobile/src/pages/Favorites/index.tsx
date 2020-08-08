import React from "react";

import { Container, TeachersFlatList } from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="My favorite Proffys" />

      <TeachersFlatList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <TeacherItem />}
      />
    </Container>
  );
};

export default Favorites;
