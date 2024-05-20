import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import Button from './Button'

const CardUser = ({ produto }) => {

    const navigation = useNavigation()

    return (

        <View style={styles.card}>
            <View style={styles.avatar}>
                <Image
                    style={styles.avatarImg}
                    source={require('../assets/images/icon-carrinho.png')}
                />
            </View>
            <View>
                <Text>João Gabriel  </Text>
                <Text style={styles.email}>jgabriel@gmail.com</Text>
            </View>
            <View style={styles.button}>
                <Button
                    title={"Visualizar"} />
            </View>


        </View>
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
        marginVertical: '5%',
        marginHorizontal: '5%'
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
