import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles";

const Teach: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <Content>
        <Title>Looking forward to be a Proffy?</Title>
        <Description>
          Get started by signing up as a teacher on our web platform.
        </Description>
      </Content>
      <OkButton onPress={goBack}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default Teach;
