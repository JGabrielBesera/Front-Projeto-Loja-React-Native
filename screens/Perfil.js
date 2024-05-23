import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import HeaderUser from '../components/HeaderUser';
import Button from '../components/Button';
import ButtonRed from '../components/ButtonRed';
import useUserStore from '../stores/userStore';
import { useEffect } from 'react';
import CardUser from '../components/CardUser';


const Perfil = () => {
    const navigation = useNavigation();
    const users = useUserStore(state => state.users)
    const setUsers = useUserStore(state => state.setUsers)

    useEffect(() => {
        const ListAllUsers = async () => {
            try {
                const result = await fetch('http://localhost:3333/user', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                });
                const data = await result.json();
                console.log(data.success);
                setUsers(data.users);
            } catch (error) {
                console.log('Error ListAllUsers ' + error.message);
            }
        };
        ListAllUsers();
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <HeaderUser />
            </View>
            <View style={styles.page}>
                <View style={styles.cadastrarBtn}> 
                    <Button title={"Visualizar Perfil"}
                    onPress={() => navigation.navigate('EditarUser')}/>
                    <Button title={"Cadastrar Novo"}
                    onPress={() => navigation.navigate('CadastrarUser')}/>
                    <ButtonRed title={"Sair"}/>
                </View>
                <ScrollView style={styles.cliente}>

                    <FlatList
                        data={users}
                        style={{ width: '100%' }}
                        renderItem={({ item }) => <CardUser user={item} />}
                        keyExtractor={item => item.id}
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
    page: {
        backgroundColor: '#c9bdc0',
        flex: 1
    },
    cadastrarBtn: {
        padding: "2.5%"
    },
    cliente: {
        marginTop: 5,
    }
})

export default Perfil