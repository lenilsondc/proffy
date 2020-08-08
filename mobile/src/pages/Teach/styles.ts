import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import contentBgImage from "../../assets/images/give-classes-background.png";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8257e5;
  padding: 40px;
`;
export const Content = styled.ImageBackground.attrs({
  source: contentBgImage,
  resizeMode: "contain",
})`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 32px;
  line-height: 37px;
  max-width: 200px;
`;

export const Description = styled.Text`
  margin-top: 24px;
  color: #d4c2ff;
  font-size: 16px;
  line-height: 26px;
  font-family: Poppins_400Regular;
  max-width: 240px;
`;

export const OkButton = styled(RectButton)`
  height: 58px;
  background-color: #04d361;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const OkButtonText = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 16px;
`;
