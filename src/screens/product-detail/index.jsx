import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import {styles} from "./styles"

const ProductDetail = () => {
  const product = useSelector((state) => state.products.selected);
  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
    </View>
  );
};

export default ProductDetail;
