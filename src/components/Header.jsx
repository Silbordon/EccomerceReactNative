import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../global/colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { deleteSession } from '../db'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/auth/authSlice'

const Header = ({ title }) => {

    const dispatch = useDispatch()
    const idToken = useSelector(state => state.auth.idToken)

    const onLogout = () => {
        deleteSession()
        dispatch(clearUser())
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/images/logo2.png")}
            />
            <Text style={styles.text}>{title}</Text>
            {idToken &&
                <Pressable onPress={onLogout} style={styles.logout}>
                    <MaterialCommunityIcons name="logout" size={35} color="black" />
                </Pressable>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        backgroundColor: colors.lightOrange,
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20,
    },
    text: {
        color: colors.green900,
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        marginLeft: 10
    },
    image: {
        width: 60,
        height: 60
    },
    icon:{
        position:"absolute",
        left:20
      },
      logout:{
        position:"absolute",
        right:10,
        bottom:20
      }
})