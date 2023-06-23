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
        width: '200px',
        height: '200px',
        marginBottom: 20
    },

    fundoForm:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3CA6A6',
        width: '100%',
        height:'70%',
        padding: 10,
        borderRadius: 10,
    },

    txtTitulo:{
        fontSize: '24px',
        color: '#012E40',
        fontWeight: 'bold',
        paddingBottom: 10
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

    repeteSenha: {
        border: '1px solid black',
        width: '80%',
        height: 30,
        padding: 10,
        marginBottom: 30
    },


    btnLogin: {
        width: '70%',
        height: 40,
        padding: 10,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#026773',
    },

    txtBtn: {
        fontWeight: 'bold',
        borderRadius: '10px',
    }
});

export default styles;