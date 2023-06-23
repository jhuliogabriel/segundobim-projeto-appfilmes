import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailFilme({navigation}) {
    return(
        <View>
            <Text>Página de detalhes do filme</Text>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Comprar Filme", {})}>
                <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botao: {
        padding: '10px',
        backgroundColor: '#F2F2F2',
        marginVertical: '20px',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
    }
})