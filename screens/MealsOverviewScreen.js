import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0
    })


    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])


    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        function pressHandler() {
            navigation.navigate('MealsDetails', {
                mealsId: item.id
            })
        }

        return <MealItem {...mealItemProps} onPress={pressHandler} />
    }

    return <View style={styles.container}>
        <FlatList data={displayedMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})