import { View, Text, Button } from "react-native";

const Categories = ({navigation}) => {
  return (
    <View>
      <Text>categories</Text>
      <Button title="got to Products" onPress={()=>{navigation.navigate("Products")}}/>
    </View>
  );
};

export default Categories;
