import { Pressable, Text, StyleSheet, Platform, View } from "react-native"

function CategoryGridTile({ title, color, onPress }) {
    return <View style={styles.gridItem}>
        <Pressable
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            android_ripple={{ color: '#ccc' }}
            onPress={onPress}
        >
            <View style={[styles.innerContainer, , { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default CategoryGridTile