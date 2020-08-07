import styled, { variant } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8257e5;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: "Poppins_400Regular";
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const Bold = styled.Text`
  font-family: "Poppins_600SemiBold";
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

const VARIANTS = {
  primary: "#9871f5",
  secondary: "#04d361",
};

interface ButtonProps {
  variant?: keyof typeof VARIANTS;
}

export const Button = styled(RectButton)<ButtonProps>`
  height: 150px;
  width: 48%;
  background-color: ${(props) =>
    props.variant ? VARIANTS[props.variant] : "#333"};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 160px;
  margin-top: 40px;
`;
