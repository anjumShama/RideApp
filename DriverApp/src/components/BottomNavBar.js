import React from 'react';
import {View, TouchableOpacity, StyleSheet, NativeModules, BackHandler} from 'react-native';
import Svg, {Polygon, Circle, Rect} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import {useScreenHistory} from '../context/ScreenHistoryContext';

const SystemNav = NativeModules.SystemNav;

export default function BottomNavBar() {
  const navigation = useNavigation();
  const {showRecents, setShowRecents} = useScreenHistory();

  return (
    <View style={styles.bar}>
      {/* BACK - triangle */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (showRecents) {
            setShowRecents(false);
          } else if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}>
        <Svg width={18} height={18} viewBox="0 0 24 24">
          <Polygon
            points="22,2 22,22 2,12"
            fill="#fff"
            transform="scale(-1,1) translate(-24,0)"
          />
        </Svg>
      </TouchableOpacity>

      {/* HOME - circle */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (showRecents) setShowRecents(false);
          if (SystemNav) {
            SystemNav.goHome();
          } else {
            BackHandler.exitApp();
          }
        }}>
        <Svg width={18} height={18} viewBox="0 0 24 24">
          <Circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
          />
        </Svg>
      </TouchableOpacity>

      {/* RECENT - square */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowRecents(!showRecents)}>
        <Svg width={18} height={18} viewBox="0 0 24 24">
          <Rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#000',
  },

  btn: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
