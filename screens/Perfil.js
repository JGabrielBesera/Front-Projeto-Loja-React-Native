import { StyleSheet, TouchableOpacity, ImageBackground, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import HeaderUser from '../components/HeaderUser';
import CardUser from '../components/CardUser';

const Perfil = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <HeaderUser />
            </View>
            <View style={styles.page}>
                <ScrollView style={styles.cliente}>
                    <CardUser />
                    <CardUser />
                    <CardUser />
                    <CardUser />
                    <CardUser />
                </ScrollView>

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
    cliente: {
        marginTop: 15,
    }
})

export default Perfil