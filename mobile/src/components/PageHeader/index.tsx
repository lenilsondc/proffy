import React, { ReactNode } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, TopBar, BarButton, Title, Header } from "./styles";
import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";

interface PageHeader {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeader> = ({ title, headerRight, children }) => {
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
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>
      {children}
    </Container>
  );
};

export default PageHeader;
