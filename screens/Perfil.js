import { StyleSheet, TouchableOpacity, ImageBackground, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'
import CardProduct from '../components/CardProduct';

const Perfil = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.page}>
                <View style={styles.title}>
                    <Text> Seu Perfil</Text>
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

    page: {
        backgroundColor: '#c9bdc0',
        flex: 1
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

export default Perfil