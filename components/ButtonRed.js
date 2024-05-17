import { Pressable, View, Text, StyleSheet } from "react-native"

const ButtonRed = ({ title, onPress }) => {
    return (
        <Pressable style={styles.tHButton} onPress={onPress}>
            <View style={styles.customButton}>
                <Text style={styles.textButton}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#ff0000",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 28,
    },
    tHButton: {
        borderRadius: 20,
        marginVertical: 8
    },
    textButton: {
        color: '#FFF',
        textAlign: 'center'
    }
})

export default ButtonRed
