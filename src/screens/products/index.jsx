import { useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from "../../components";
import { filterProducts, selectedProduct } from "../../store/actions";

import { styles } from "./styles";

const Products = ({ navigation, route }) => {
  const { title } = route.params;
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.selected);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  const onSelected = (item) => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("ProductDetail");
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );
  const keyEstractor = (item) => item.id.toString();

  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyEstractor={keyEstractor}
      />
    </View>
  );
};

export default Products;
