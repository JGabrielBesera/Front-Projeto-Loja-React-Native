import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import CardProduct from '../components/CardProduct';
import { useState, useEffect } from 'react';
import useProdutoStore from '../stores/produtoStore';

const ListBones = () => {

    const navigation = useNavigation();
    const produtos = useProdutoStore(state => state.produtos)


    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <ImageBackground source={require('../assets/images/icon-pesquisar.png')}>
                    <Header />
                </ImageBackground>
            </View>
            <View style={styles.page}>
                <View style={styles.listProducts}>
                    <View style={styles.title}>
                        <Text> Conheça Nossas Bolsas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CadastrarProduto')}>
                            <Text style={styles.ver}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.products}>
                        <FlatList
                            numColumns={3}
                            style={{ width: '100%' }}
                            data={produtos.filter(item => item.categoria === 2)}
                            renderItem={({ item }) => <CardProduct produto={item} />}
                            keyExtractor={item => item.id}
                        />

                    </ScrollView>

                </View>

            </View>



        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: "2.5%"
    },
    banner: {
        height: 150,
        backgroundColor: '#ff7799'
    },
    page: {
        backgroundColor: '#c9bdc1',
        height: "100%"
    },
    listProducts: {
        marginTop: 20,

    },
    title: {
        flexDirection: 'row',
        paddingBottom: 20
    },
    ver: {
        paddingStart: 40,
        textDecorationLine: 'underline'
    }
})

export default ListBones