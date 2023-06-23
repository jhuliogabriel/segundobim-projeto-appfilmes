import { Image, Text, View, TouchableOpacity,  TextInput } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';


export default function ForgotPassword({navigation}){
    
    return (
        <View style={styles.container}>
            <View style={styles.fundoForm}>
                <Image style={styles.imgLogo} source={require('../../assets/imgs/logo.png')}/>
                

                <Text style={styles.txtTitulo}>Esqueceu a senha?</Text>

                <TextInput placeholder="Digite seu Email" style={styles.emailInput}>

                </TextInput>

                    <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate("Tela de Login", {})}>
                        <Text style={styles.txtBtn}>Redefinir Senha</Text>
                    </TouchableOpacity>

                    <Link style={styles.linkRegistro} to={{screen: 'Tela de Login'}}>Voltar à pagina de login</Link>
            </View>
        </View>
    );
}