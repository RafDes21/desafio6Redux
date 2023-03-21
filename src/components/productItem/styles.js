import { StyleSheet } from "react-native";
import { THEMES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 20,
    backgroundColor: THEMES.background,
    marginVertical:20
  },
  contentContainer: {},
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    
  },
  containerDates: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
