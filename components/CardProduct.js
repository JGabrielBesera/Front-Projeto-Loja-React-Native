import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'



const CardProduct = () => {
    return (
        <View style={styles.card}>
            <View style={styles.photo}>
                <Image style={styles.photoImg}
                // source={camiseta.photo}/> 
                source={require('../assets/images/icon-pesquisar.png')}/>
            </View>
            <View style={styles.title}>
                <Text style={styles.title}>"Camiseta "Eu amo o Flavio Mesmo"</Text>
                <Text style={styles.title}> R$ 10.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        height: 200,
        width: 125,
        backgroundColor: '#bdc9c6'
    },
    photoImg: {
        width: 125  ,
        height: 125,
    },
    title: {
        marginTop: 4
    },
    title: {
        marginTop: 4
    }
})

export default CardProduct