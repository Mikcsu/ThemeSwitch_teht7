import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../Styles';
import { UseTheme } from '../context/UseTheme';
import ThemeSwitchButton from '../components/ThemeSwitch';

export default function Settings() {
    const { isDarkMode } = UseTheme()
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <ThemeSwitchButton/>
    </View>
  );
}