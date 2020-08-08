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

interface TeacherItemProps {}

const TeacherItem: React.FC<TeacherItemProps> = () => {
  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: "https://github.com/lenilsondc.png" }} />
        <ProfileInfo>
          <Name>Lenilson de Castro</Name>
          <Subject>Programming</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia
        aut dignissimos vero optio, doloribus voluptatibus sapiente harum?
        Nostrum aperiam placeat odit harum consequatur autem voluptate cumque
        voluptates deserunt exercitationem?
      </Bio>

      <Footer>
        <Price>
          Hourly rate {"    "}
          <PriceValue>$50</PriceValue>
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
