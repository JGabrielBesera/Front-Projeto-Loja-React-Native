import { StyleSheet, ScrollView, View, Text, TextInput, ImageBackground } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react'
import Button from '../components/Button';
import ButtonRed from '../components/ButtonRed';
import HeaderCrud from '../components/HeaderCrud';
import { BASE_URL } from '../config';
import useProdutoStore from '../stores/produtoStore';



const EditarProduto = () => {

    const route = useRoute()

    const editProdutoStore = useProdutoStore((state) => state.editProduto)
    const removeProdutoStore = useProdutoStore((state) => state.removeProduto)
    const { produto } = route.params



    const navigation = useNavigation()
    console.log(produto);
    const [txtNome, setTxtNome] = useState(produto.nome)
    const [txtPhoto, setTxtPhoto] = useState(produto.photo)
    const [txtPrice, setTxtPrice] = useState(produto.preco)
    const [txtDesc, setTxtDesc] = useState(produto.descricao)
    const [txtCat, setTxtCat] = useState(produto.categoria)

    const putProduto = async () => {
        try {
            const result = await fetch(`${BASE_URL}/produtos/${produto.id}`, {
                method: "PUT",
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

            });
            console.log(result);
            const data = await result.json();
            console.log(data);
            if (data?.success) {
                editProdutoStore(produto.id, data.produto);
                console.log(data.produto,
                    result.status
                )
                navigation.goBack();
            } else {

                for (const key in data.fields) {
                    const elem = data.fields[key]

                    const msg = elem.messages.map(v => v + "\n")

                    alert(msg)
                }
            }
        } catch (error) {
            console.log('Error postProduto ' + error.message);
            console.log(error);
        }
    };

    const removeProduto = async () => {
        try {
            const result = await fetch(`${BASE_URL}/produtos/${produto.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()
            console.log(data)
            if (data?.success) {
                removeProdutoStore(produto.id)
                navigation.goBack()
            } else {
                alert(data.error)
            }
        } catch (error) {
            console.log('Error removeUser ' + error.message)
            alert(error.message)
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.banner}>
                <HeaderCrud title={"Editar Produto"}/>
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
                    title="Editar Produto"
                    onPress={putProduto}
                />
                <ButtonRed

                    title="Excluir Produto"
                    onPress={removeProduto}
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
    button: {
        backgroundColor: "#ff0000",
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 28,
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
})

export default EditarProduto