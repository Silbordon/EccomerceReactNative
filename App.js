import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
} from "react-native";
import Home from "./src/Screens/Home"
import { colors } from "./src/global/colors";
SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraLighItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Barlow-Bold": require("./assets/fonts/Barlow-Bold.ttf"),
    "Barlow-ExtraLighItalic": require("./assets/fonts/Barlow-ExtraLightItalic.ttf"),
    "Barlow-Italic": require("./assets/fonts/Barlow-Italic.ttf"),
    "Barlow-LighItalic": require("./assets/fonts/Barlow-LightItalic.ttf"),
    "Barlow-Regular": require("./assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("./assets/fonts/Barlow-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaView style={styles.container}>
       <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.grayNatural,
  },
});
