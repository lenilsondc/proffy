import styled from "styled-components/native";
import { FlatList } from "react-native";

import { Teacher } from "../../components/TeacherItem";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeachersFlatList = styled(FlatList as new () => FlatList<Teacher>)`
  margin-top: -40px;
  padding: 0 16px 24px 16px;
`;
