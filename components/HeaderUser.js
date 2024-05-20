import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Image } from 'expo-image'
import Button from './Button'


const HeaderUser = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.img} source={require('../assets/images/icon-pesquisar.png')} />
            <Text> João Gabriel de Faria Beserra</Text>
            <Button
            title={"Editar"} />
            <Button 
            title={"Sair"} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 40,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        border: 1 ,
        backgroundColor: '#c9bdc0',

    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 360,
        borderWidth: 1
    }


})

export default HeaderUser