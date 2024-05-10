import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import ListCamisetas from './ListCamisetas';
import CardProduct from '../components/CardProduct';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
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
                            <Text style={styles.ver}>Ver Todas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.products}>
                        <CardProduct/>
                    </View>

                </View>

            </View>



        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
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