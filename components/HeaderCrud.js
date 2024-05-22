import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Image } from 'expo-image'
import Button from './Button'


const HeaderCrud = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.texto}> {title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        height: 60,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        border: 1,
        backgroundColor: "#345944",
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 28,
        
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
    },


})

export default HeaderCrud