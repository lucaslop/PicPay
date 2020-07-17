import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Button = styled(LinearGradient).attrs({
  colors: ['#00fc6c', '#00ac4a'],
})`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
`;
