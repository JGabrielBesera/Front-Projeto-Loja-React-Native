import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, ScrollView, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import CardProduct from '../components/CardProduct';

import { useState, useEffect } from 'react';


const Home = () => {

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
                        <TouchableOpacity onPress={() => navigation.navigate('ListCamisetas')}>
                            <Text style={styles.ver}>Ver Tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} style={styles.products}>
                    <FlatList
                    horizontal={true}
                        style={{ width: '100%' }}
                        data={produtos.filter(item => item.categoria === 1)}
                        renderItem={({ item }) => <CardProduct produto={item} />}
                        keyExtractor={item => item.id}
                    />
                    </ScrollView>
                </View>
                <View style={styles.listProducts}>
                    <View style={styles.title}>
                        <Text> Conheça Nossos Bonés</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ListBones')}>
                            <Text style={styles.ver}>Ver Tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.products}>
                    <ScrollView horizontal={true} style={styles.products}>
                    <FlatList
                    horizontal={true}
                        style={{ width: '100%' }}
                        data={produtos.filter(item => item.categoria === 2)}
                        renderItem={({ item }) => <CardProduct produto={item} />}
                        keyExtractor={item => item.id}
                    />
                    </ScrollView>
                    </View>
                </View>
                <View style={styles.listProducts}>
                    <View style={styles.title}>
                        <Text> Conheça Nossas Bolsas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ListBolsas')}>
                            <Text style={styles.ver}>Ver Tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.products}>
                    <ScrollView horizontal={true} style={styles.products}>
                    <FlatList
                    horizontal={true}
                        style={{ width: '100%' }}
                        data={produtos.filter(item => item.categoria === 3)}
                        renderItem={({ item }) => <CardProduct produto={item} />}
                        keyExtractor={item => item.id}
                    />
                    </ScrollView>
                    </View>
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
        backgroundColor: '#c9bdc0',
        flex: 1
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

export default Home