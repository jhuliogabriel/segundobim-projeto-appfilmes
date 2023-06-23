import { useContext, useState } from "react";
import { Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Link } from '@react-navigation/native';
import styles from "./styles";
import AuthContext from "../../contexts/AuthContext";


export default function LoginPage({navigation}){
    
    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.fundoForm}>
                <Image style={styles.imgLogo} source={require('../../assets/imgs/logo.png')}/>

                <Text style={styles.txtTitulo}>Tela de Login</Text>
                <TextInput placeholder="Email" 
                            style={styles.emailInput}>
   
                </TextInput>



                <TextInput placeholder="Senha"
                            style={styles.senhaInput}>
                </TextInput>

                <TouchableOpacity style={styles.btnLogin} onPress={() => signIn()}>
                    <Text style={styles.txtBtn}>Login</Text>
                </TouchableOpacity>

                <View style={styles.viewLinks}>
                    <Link style={styles.linkRegistro} to={{screen: 'Tela de Registro'}}>Registre aqui!</Link>
                    <Link style={styles.linkEsqueceuSenha} to={{screen: 'Esqueceu Senha'}}>Esqueceu a senha</Link>
                </View>
            </View>
        </View>
    );
}