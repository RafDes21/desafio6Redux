import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { CategoryItem } from "../../components";
import { selectedCategory } from "../../store/actions";

import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const onSelected = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Products",{
      title: item.title
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );
  const keyEstractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyEstractor={keyEstractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Categories;
