import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Image } from 'expo-image'


const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.pesquisar}>
                <Image style={styles.foto_pesquisar} source={require('../assets/images/icon-pesquisar.png')}/>
                <TextInput 
                style={styles.input}
                placeholder='Pesquisar Por'
                />
            </View>
            <View style={styles.carrinho}>
                <Image style={styles.foto_carrinho} source={require('../assets/images/icon-carrinho.png')}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: '2.5%',
        height: 40,
        display: 'flex',
        justifyContent: 'space-between',
        width: '95%',
        flexDirection: 'row',
        
    },
    pesquisar: {
        width: '90%',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#aaaaaa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 10
    
    },
    input: {
        width: '90%',
        marginStart: 10
    },
    foto_pesquisar: {
        width: 15,
        height: 15,
        padding: 10,
    },
    carrinho: {
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaaaaa',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,

    },
    foto_carrinho: {
        width: 22,
        height: 22,
    }
})

export default Header