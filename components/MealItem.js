import { Text, Pressable, View, Image, StyleSheet, Platform } from "react-native";
import MealDetails from "./MealDetails";

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }) {
    return <View style={styles.mealItem}>
        <Pressable
            onPress={onPress}
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => pressed ? styles.buttonPressed : null}>
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
            </View>
        </Pressable>
    </View >
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.35,
        shadowColor: 'black',
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    buttonPressed: {
        opacity: 0.5
    },
})

export default MealItem;