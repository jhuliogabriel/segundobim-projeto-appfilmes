import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#1B264F', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },

    imgLogo: {
        width: 200,
        height: 200,
        marginBottom: 30
    },

    emailInput: {
        border: '1px solid black',
        width: '80%',
        height: 30,
        padding: 10,
        marginBottom: 15
    },

    senhaInput: {
        border: '1px solid black',
        width: '80%',
        height: 30,
        padding: 10,
        marginBottom: 30
    },


    btnLogin: {
        border: '1px solid black',
        width: '30%',
        height: 40,
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cccccc'
    },

    txtBtn: {

    },

    linkRegistro :{
    },

    linkEsqueceuSenha: {

    },

    viewLinks: {
        flexDirection: 'row',
        marginTop: 30,
        width: '70%',
        justifyContent: 'space-between'
    }
});

export default styles;