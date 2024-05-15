import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'

const CardProduct = ({ produtos }) => {
        // Verificar se produtos está definido e não é vazio
        if (!produtos || !produtos.photo || !produtos.nome || !produtos.preco) {
            return null; // Se os dados não estiverem disponíveis, retornar nulo para não renderizar nada
        }

    return (
        <View style={styles.card}>
            <View style={styles.photo}>
                <Image style={styles.photoImg} source={produtos.photo}/>
            </View>
            <View style={styles.title}>
                {/* Verificar se as propriedades estão definidas antes de acessá-las */}
                <Text>{produtos.nome}</Text>
                <Text>R$ {produtos.preco}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
        marginEnd: 15,
        borderRadius: 10,
        height: 200,
        width: 125,
        backgroundColor: '#bdc9c6'
    },
    photoImg: {
        borderRadius: 10,
        width: 125,
        height: 125,
    },
    title: {
        marginTop: 4
    },
})

export default CardProduct
