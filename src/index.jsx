import { ActivityIndicator, Text, View } from "react-native";
import { useFonts } from "expo-font";

import AppNavigator from "./navigation";
import { styles } from "./styles";

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
    "Roboto-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AppNavigator />;
};

export default App;
