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
        borderRadius: 10,
        width: '100%',
        height:'70%',
        padding: 10,
    },

    txtTitulo:{
        fontSize: '24px',
        color: '#012E40',
        fontWeight: 'bold',
        padding: 10
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
        width: '30%',
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

    },

    linkRegistro :{
        fontWeight: 'bold',
    },

    linkEsqueceuSenha: {
        fontWeight: 'bold',
    },

    viewLinks: {
        flexDirection: 'row',
        marginTop: 30,
        width: '70%',
        justifyContent: 'space-between'
    }
});

export default styles;