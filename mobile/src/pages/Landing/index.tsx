import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

import ladingImage from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import teachIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import {
  Container,
  Banner,
  Title,
  Bold,
  Button,
  TotalConnections,
  ButtonsContainer,
  ButtonText,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <Container>
      <Banner source={ladingImage} />
      <Title>
        Welcome, {"\n"}
        <Bold>What would you like to do?</Bold>
      </Title>

      <ButtonsContainer>
        <Button variant="primary">
          <Image source={studyIcon} />
          <ButtonText>Study</ButtonText>
        </Button>
        <Button variant="secondary">
          <Image source={teachIcon} />
          <ButtonText>Teach</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total of 250 connections made <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
