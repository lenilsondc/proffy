import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeachersFlatList = styled(FlatList)`
  margin-top: -40px;
  padding: 0 16px 24px 16px;
`;
