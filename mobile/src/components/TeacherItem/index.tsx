import React, { useState } from "react";
import { Text, Image, Linking, AsyncStorage } from "react-native";
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
import api from "../../services/api";

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
  favorited?: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  teacher,
  favorited = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorited);

  function linkToWhatsApp() {
    Linking.openURL(`whatsapp://send?phone${teacher.whatsapp}`);
    api.post("connections", { user_id: teacher.id });
  }

  async function toggleFavorite() {
    const favs = await AsyncStorage.getItem("favorites");
    const favsArray: Teacher[] = JSON.parse(favs || "[]");

    if (isFavorite) {
      const favIndex = favsArray.findIndex(
        (teacherItem) => teacher.id === teacherItem.id
      );

      favsArray.splice(favIndex, 1);
      setIsFavorite(false);
    } else {
      favsArray.push(teacher);

      setIsFavorite(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favsArray));
  }

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
          <FavoriteButton
            onPress={toggleFavorite}
            variant={isFavorite ? "red" : "default"}
          >
            <Image source={isFavorite ? unfavoriteIcon : favoriteIcon} />
          </FavoriteButton>

          <ContactButton onPress={linkToWhatsApp}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Contact</ContactButtonText>
          </ContactButton>
        </FooterButtons>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
