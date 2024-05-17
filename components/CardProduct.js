import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'

const CardProduct = ({ produto }) => {

    const navigation = useNavigation()
        // Verificar se produtos está definido e não é vazio
        if (!produto || !produto.photo || !produto.nome || !produto.preco) {
            return null; // Se os dados não estiverem disponíveis, retornar nulo para não renderizar nada
        }

        const id = produto.id

    return (
        <Pressable onPress={() => navigation.navigate('EditarProduto', {produto})}>
        <View style={styles.card}>
            <View style={styles.photo}>
                <Image style={styles.photoImg} source={produto.photo}/>
            </View>
            <View style={styles.title}>
                {/* Verificar se as propriedades estão definidas antes de acessá-las */}
                <Text>{produto.nome}</Text>
                <Text>R$ {produto.preco}</Text>
            </View>
        </View>
        </Pressable>
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
