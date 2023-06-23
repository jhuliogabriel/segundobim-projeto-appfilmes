import { Image, Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';


export default function RegisterPage({navigation}){
    
    // const [email, setEmail] = useState("");
    // const [senha, setSenha] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.fundoForm}>
                <Image style={styles.imgLogo} source={require('../../assets/imgs/logo.png')}/>
                

                <Text style={styles.txtTitulo}>Tela de Registro</Text>
                <TextInput placeholder="Usuário" style={styles.emailInput}>

                </TextInput>
                <TextInput placeholder="Email" style={styles.emailInput}>

                </TextInput>

                <TextInput placeholder="Senha" style={styles.senhaInput}>

                </TextInput>

                <TextInput placeholder="Repetir a senha" style={styles.repeteSenha}>
                    
                </TextInput>

                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate("Tela de Login", {})}>
                    <Text style={styles.txtBtn}>Registrar</Text>
                </TouchableOpacity>

                <View style={styles.viewLinks}>
                    <Link style={styles.linkRegistro} to={{screen: 'Tela de Login'}}>Voltar para o login!</Link>
                </View>
            </View>
        </View>
    );
}