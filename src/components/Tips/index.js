import React from "react";
import {
  Container,
  Option,
  Title,
  Image,
  Banner,
  BannerTitle,
  Info,
  BannerImage,
  BannerLabel
} from "./styles";

import img8 from "../../../assets/08.png";
import img9 from "../../../assets/09.png";
import img10 from "../../../assets/10.png";
import img11 from "../../../assets/11.png";
import img12 from "../../../assets/12.png";
import img13 from "../../../assets/13.png";

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#172c4a"
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#6a0159"
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#4139c8"
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#00ab4b"
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#ba2f26"
  }
];

const Tips = () => {
  return (
    <>
      <Container>
        {items.map(item => (
          <Option key={item.key} bgColor={item.bgColor}>
            <Title>{item.title}</Title>
            <Image source={item.img} />
          </Option>
        ))}
      </Container>

      <Banner>
        <Info>
          <BannerTitle>Cobre um amigo</BannerTitle>
          <BannerLabel>
            Matenha suas parcerias em dia, use o PicPay para fazer suas
            cobranças
          </BannerLabel>
        </Info>

        <BannerImage source={img13} />
      </Banner>
    </>
  );
};

export default Tips;
