import { View, Text, Button } from "react-native";

const Products = ({navigation}) => {
  return (
    <View>
      <Text>Products</Text>
      <Button title="got to DetailProduct" onPress={()=>{navigation.navigate("ProductDetail")}}/>

    </View>
  );
};

export default Products;
