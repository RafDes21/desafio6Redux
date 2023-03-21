import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.containerDates}>
          <Text>{item.weight}</Text>
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
