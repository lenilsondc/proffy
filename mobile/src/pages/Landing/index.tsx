import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((res) => {
      setTotalConnections(res.data.total);
    });
  }, []);

  const { navigate } = useNavigation();

  function navigateToTeachPage() {
    navigate("Teach");
  }

  function navigateToStudyPage() {
    navigate("Study");
  }

  return (
    <Container>
      <Banner source={ladingImage} />
      <Title>
        Welcome, {"\n"}
        <Bold>What would you like to do?</Bold>
      </Title>

      <ButtonsContainer>
        <Button variant="primary" onPress={navigateToStudyPage}>
          <Image source={studyIcon} />
          <ButtonText>Study</ButtonText>
        </Button>
        <Button variant="secondary" onPress={navigateToTeachPage}>
          <Image source={teachIcon} />
          <ButtonText>Teach</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total of {totalConnections} connections made{" "}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
