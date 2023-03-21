import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.background,
  },
  containerList: {
    flex: 1,
  },
  contentContainerList: {
    paddingBottom: 30,
  },
});
