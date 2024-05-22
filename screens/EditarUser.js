import { StyleSheet, TouchableOpacity, ImageBackground, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import Header from '../components/Header';
import Button from '../components/Button';
import HeaderCrud from '../components/HeaderCrud';

const Nome = "João Gabriel de Faria Beserra"
const Foto = "https://adsadafvFvbavtvfadgdfg"
const Email = "Jgabriel@gmail.com"
const Senha = "joao123"

const EditarUser = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <ImageBackground source={require('../assets/images/icon-pesquisar.png')}>
                    <HeaderCrud 
                    title={"Editar Produto"}/>
                </ImageBackground>
            </View>
            <View style={styles.page}>
                <ScrollView style={styles.cliente}>
                    <Image style={styles.photoImg} source={require('../assets/images/icon-pesquisar.png')} />
                    <TextInput
                        style={styles.input}
                        placeholder='Foto...'
                        onChangeText={Foto}
                        value={Foto}
                        
                    />
                    <Button
                        title='Editar Foto'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Foto...'
                        onChangeText={Nome}
                        value={Nome}
                        
                    />
                    <Button
                        title='Editar Nome'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Foto...'
                        onChangeText={Email}
                        value={Email}
                        
                    />
                    <Button
                        title='Editar Email'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Foto...'
                        onChangeText={Senha}
                        value={Senha}
                        
                    />
                    <Button
                        title='Editar Senha'
                    />
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
    banner: {
        height: 150,
        backgroundColor: '#ff7799'
    },
    page: {
        backgroundColor: '#c9bdc0',
        flex: 1
    },
    cliente: {
        marginTop: 25,
    },
    photoImg: {
        width: 150,
        height: 150,
        borderRadius: 360,
        borderWidth: 1
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginTop: 18,
        padding: 10,
        textAlign: 'center'
    }
})

export default EditarUser