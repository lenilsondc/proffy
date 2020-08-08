import React from "react";
import { Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, TopBar, BarButton, Title } from "./styles";
import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";

interface PageHeader {
  title: string;
}

const PageHeader: React.FC<PageHeader> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <Container>
      <TopBar>
        <BarButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BarButton>
        <Image source={logoImage} resizeMode="contain" />
      </TopBar>

      <Title>{title}</Title>
    </Container>
  );
};

export default PageHeader;
