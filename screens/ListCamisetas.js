import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, ScrollView, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import CadastrarProduto from './CadastrarProdutos';
import CardProduct from '../components/CardProduct';
import { useState, useEffect } from 'react';

const ListCamisetas = () => {

    const navigation = useNavigation();
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        const ListAllProdutos = async () => {
            try {
                const result = await fetch('http://localhost:3333/produtos', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                const data = await result.json();
                console.log(data.success);
                setProdutos(data.produtos);
            } catch (error) {
                console.log('Error ListAllProdutos ' + error.message);
            }
        };
        ListAllProdutos();
    }, []);



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
                        <Text> Conheça Nossas Camisetas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CadastrarProduto')}>
                            <Text style={styles.ver}>Ver Tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.products}>
                        <FlatList
                            numColumns={3}
                            style={{ width: '100%' }}
                            data={produtos.filter(item => item.categoria === 1)}
                            renderItem={({ item }) => <CardProduct produtos={item} />}
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

export default ListCamisetas