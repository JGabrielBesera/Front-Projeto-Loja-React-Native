import { StyleSheet, TouchableOpacity, ImageBackground, Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import ListCamisetas from './ListCamisetas';
import CardProduct from '../components/CardProduct';

const Home = () => {
    const navigation = useNavigation();

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
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                    </ScrollView>
                </View> 
                <View style={styles.listProducts}>
                    <View style={styles.title}>
                        <Text> Conheça Nossos Bones</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ListCamisetas')}>
                            <Text style={styles.ver}>Ver Tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.products}>
                    <ScrollView horizontal={true} style={styles.products}>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                    </ScrollView>
                    </View>
                </View>  
                <View style={styles.listProducts}>
                    <View style={styles.title}>
                        <Text> Conheça Nossas Bolsas</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ListCamisetas')}>
                            <Text style={styles.ver}>Ver Tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.products}>
                    <ScrollView horizontal={true} style={styles.products}>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
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