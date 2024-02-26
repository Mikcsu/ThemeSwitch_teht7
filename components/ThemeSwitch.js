import React from "react";
import { Switch } from "react-native-paper";
import { UseTheme } from "../context/UseTheme";

export default function ThemeSwitchButton() {
    const {isDarkMode,toggleDarkMode} = UseTheme()

    return(
        <Switch value={isDarkMode} onValueChange={toggleDarkMode}/>
    )
}
