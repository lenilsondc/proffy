import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Teacher } from "../../components/TeacherItem";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const TeachersFlatList = styled(FlatList as new () => FlatList<Teacher>)`
  margin-top: -40px;
  padding: 0 16px 24px 16px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#c1bccc",
})`
  height: 54px;
  background-color: #fff;
  border-radius: 8px;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #04d361;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
`;

export const EmptyState = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  padding-left: 40px;
`;

export const EmptyStateText = styled.Text`
  color: #6a6180;
  line-height: 34px;
  font-family: Archivo_700Bold;
  font-size: 26px;
  text-align: center;
`;
