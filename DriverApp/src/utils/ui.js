import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const UI = {
  width,
  height,

  horizontal: 28,

  topSpacing: 70,
  titleSpacing: 8,
  sectionSpacing: 35,
  inputSpacing: 20,

  inputHeight: 55,
  radius: 16,

  buttonHeight: 58,
  bottomSpacing: 35,
};