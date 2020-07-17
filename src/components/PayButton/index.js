import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Text} from './styles';

const PayButton = () => {
  return (
    <TouchableWithoutFeedback>
      <Button>
        <Icon name="attach-money" size={30} color="#fff" />
        <Text>Pagar</Text>
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
