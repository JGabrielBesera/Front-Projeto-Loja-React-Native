import { StyleSheet, TouchableOpacity, ImageBackground, Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import Button from '../components/Button';
import ButtonRed from '../components/ButtonRed';
import HeaderCrud from '../components/HeaderCrud';
import useUserStore from '../stores/userStore';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { BASE_URL } from '../config';



const EditarUser = () => {
    const navigation = useNavigation();
    const route = useRoute()

    const editUserStore = useUserStore((state) => state.editUser)
    const removeUserStore = useUserStore((state) => state.removeUser)
    const { user } = route.params

    const [txtNome, setTxtNome] = useState(user.nome)
    const [txtPhoto, setTxtPhoto] = useState(user.photo)
    const [txtPass, setTxtPass] = useState(user.pass)
    const [txtEmail, setTxtEmail] = useState(user.email)

    const putUser = async () => {
        try {
            const result = await fetch(`${BASE_URL}/user/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: txtNome,
                    photo: txtPhoto,
                    pass: txtPass,
                    email: txtEmail,
                })

            });
            console.log(result);
            const data = await result.json();
            console.log(data);
            if (data?.success) {
                editUserStore(user.id, data.user);
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

    const removeUser = async () => {
        try {
            const result = await fetch(`${BASE_URL}/user/${user.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()
            console.log(data)
            if (data?.success) {
                removeUserStore(user.id)
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
        <View style={styles.container}>
            <View style={styles.banner}>
                <ImageBackground source={require('../assets/images/icon-pesquisar.png')}>
                    <HeaderCrud
                        title={"Editar User"} />
                </ImageBackground>
            </View>
            <View style={styles.page}>
                <ScrollView style={styles.cliente}>
                    <View style={styles.user}>
                    <Image style={styles.photoImg} source={user.photo} />
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
                        title="Editar"
                        onPress={putUser}
                    />
                    <ButtonRed
                    title={"Excluir"}
                    onPress={removeUser}/>
                    </View>
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
    user: {
        display: 'flex',
        alignItems: 'center'
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