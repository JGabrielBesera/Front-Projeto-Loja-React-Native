import { StyleSheet, ScrollView, View, TextInput, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import HeaderCrud from '../components/HeaderCrud';
import Button from '../components/Button';
import { BASE_URL } from '../config';
import useUserStore from '../stores/userStore';



const CadastrarUser = () => {
    const addUser =  useUserStore((state) => state.addUser)
    
    const navigation = useNavigation()
    const [txtNome, setTxtNome] = useState('')
    const [txtPhoto, setTxtPhoto] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtPass, setTxtPass] = useState('')


    const postUser = async () => {
        try {
            //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
            const result = await fetch(`${BASE_URL}/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    nome: txtNome, 
                    photo: txtPhoto, 
                    pass: txtPass, 
                    email: txtEmail, 
                })
            })
            const data = await result.json()
            console.log(data)
            if (data?.success) {
                addUser(data.user)
                navigation.goBack()
            } else {
                alert(data.error)
            }
        } catch (error) {
            console.log('Error postProduto ' + error.message)
            alert(error.message)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <ImageBackground source={require('../assets/images/icon-pesquisar.png')}>
                <HeaderCrud 
                    title={"Cadastrar User"}/>
                </ImageBackground>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome...'
                    onChangeText={setTxtNome}
                    value={txtNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Foto...'
                    onChangeText={setTxtPhoto}
                    value={txtPhoto}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email...'
                    onChangeText={setTxtEmail}
                    value={txtEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha...'
                    onChangeText={setTxtPass}
                    value={txtPass}
                />
              
                <Button
                    title="Cadastrar User"
                    onPress={postUser}
                />
            </View>
        </ScrollView>
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
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginTop: 18,
        padding: 10,
    },
    ver: {
        paddingStart: 40,
        textDecorationLine: 'underline'
    }
})

export default CadastrarUser