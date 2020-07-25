import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  //fica horizontal
  horizontal: true,
  //esconde a barra
  showsHorizontalScrollIndicator: false,
  //estilo do slider
  contentContainerStyle: {
    paddingLeft: 16
  }
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 200px;
  border-radius: 8px;
  padding: 14px;
  justify-content: space-between;
  margin-right: 10px;
`;
export const Title = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;
export const Image = styled.Image`
  align-self: center;
`;

// Banner

export const Banner = styled.View`
  background: #6882bb;
  margin: 25px 16px;
  border-radius: 8px;
  max-height: 100%;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;
export const Info = styled.View`
  flex: 1;
`;

export const BannerTitle = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;

export const BannerLabel = styled.Text`
  font-size: 14px;
  color: #eee;
  margin-top: 20px;
  margin-right: 15px;
`;

export const BannerImage = styled.Image``;
