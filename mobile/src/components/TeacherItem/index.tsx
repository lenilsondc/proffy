import React from "react";
import { Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import favoriteIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  FooterButtons,
  FavoriteButton,
  ContactButton,
  ContactButtonText,
} from "./styles";

export interface Teacher {
  id: number;
  subject: string;
  hourly_rate: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />
        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Hourly rate {"    "}
          <PriceValue>{teacher.hourly_rate}</PriceValue>
        </Price>
        <FooterButtons>
          <FavoriteButton>
            <Image source={favoriteIcon} />
          </FavoriteButton>
          <FavoriteButton variant="red">
            <Image source={unfavoriteIcon} />
          </FavoriteButton>
          <ContactButton>
            <Image source={whatsappIcon} />
            <ContactButtonText>Contact</ContactButtonText>
          </ContactButton>
        </FooterButtons>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
