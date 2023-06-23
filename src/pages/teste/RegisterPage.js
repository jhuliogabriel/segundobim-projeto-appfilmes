import { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function LoginPage({navigation}){
    
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.login_image}
                source={{ uri: require('../../')}}>
            </Image> */}
            <TextInput
                style={styles.input}
                text={email}
                onChangeText={(e) => {
                    setNomeUsuario(e.value);
                    console.log(nomeUsuario);
                }} 
                placeholder="Nome de Usuário"
            />
            <TextInput
                style={styles.input}
                text={email}
                onChangeText={(e) => {
                    setEmail(e.value);
                    console.log(email);
                }} 
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                text={senha}
                onChangeText={(e) => {
                    setSenha(e.value);
                    console.log(senha);
                }} 
                placeholder="Senha"
            />
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Tela de Login", {})}>
                <Text style={styles.text_botao}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    botao: {
        padding: '10px',
        backgroundColor: '#024959',
        marginVertical: '20px',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
    },
    text_botao: {
        color: '#F2E3D5'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    login_image: {
    width: '150px',
    height: '150px'
    }

})