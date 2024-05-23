import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import Button from './Button'

const CardUser = ({ user }) => {

    const navigation = useNavigation()

    return (
<Pressable onPress={() => navigation.navigate('EditarUser', {user})}>
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Image
                    style={styles.avatarImg}
                    source={user.photo}
                />
            </View>
            <View>
                <Text>{user.nome}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>
            <View style={styles.button}>
                <Button
                     onPress={() => navigation.navigate('EditarUser', {user})}
                    title={"Visualizar"} />
            </View>


        </View>
        </Pressable>
        


    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginStart: '5%',
        marginEnd: '5%',
        marginBottom: 15
    },
    avatar: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 360
    },
    avatarImg: {
        width: 60,
        height: 60,
        borderRadius: 35
    },
    email: {
        marginTop: 4
    },
    button: {
        marginEnd: 10
    }
})

export default CardUser
