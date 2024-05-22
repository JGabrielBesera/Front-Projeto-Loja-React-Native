import { StyleSheet, ScrollView, View, TextInput, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'
import HeaderCrud from '../components/HeaderCrud';
import Button from '../components/Button';
import { BASE_URL } from '../config';



const CadastrarUser = () => {

    const navigation = useNavigation()

    const [txtNome, setTxtNome] = useState('')
    const [txtPhoto, setTxtPhoto] = useState('')
    const [txtPrice, setTxtPrice] = useState('')
    const [txtDesc, setTxtDesc] = useState('')
    const [txtCat, setTxtCat] = useState('')

    const postProduto = async () => {
        try {
            //const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user', {
            const result = await fetch(`${BASE_URL}/produtos`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    nome: txtNome, 
                    photo: txtPhoto, 
                    preco: parseInt(txtPrice), // Convertendo para inteiro
                    descricao: txtDesc, 
                    categoria: parseInt(txtCat) // Convertendo para inteiro
                })
            })
            const data = await result.json()
            console.log(data)
            if (data?.success) {
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
                    placeholder='Categoria...'
                    onChangeText={setTxtCat}
                    value={txtCat}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Preço...'
                    onChangeText={setTxtPrice}
                    value={txtPrice}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Descrição...'
                    onChangeText={setTxtDesc}
                    value={txtDesc}
                />
                <Button
                    title="Cadastrar Produto"
                    onPress={postProduto}
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
    }
})

export default CadastrarUser