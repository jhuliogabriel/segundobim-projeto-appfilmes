import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Link } from '@react-navigation/native';

export default function CardFilme({filme}, {navigation}){
    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={{uri: "https://api.otaviolube.com" + (filme.attributes.poster.data.attributes.url)}}></Image>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
            {filme.attributes.sinopse.length < 200 ?
                <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text> : <>
                <Text style={styles.sinopse}>{filme.attributes.sinopse.slice(0,200) + '...'}</Text>
                <Link to={{ screen: "Detalhes do Filme", params: {filme: filme.attributes}}}>Detalhes</Link>
                </>
            }
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Comprar Filme", {})}>
                <Text>Comprar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: '20px',
        backgroundColor: '#3CA6A6',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        borderRadius: '20px'
    },
    imagem: {
        width: '80%',
        height: '180px',
        resizeMode: 'contain',
        marginBottom: '10px'
    },
    titulo: {
        fontSize: '24px',
        color: '#012E40',
        fontWeight: 'bold',
        paddingBottom: '5px'
    },
    subtitulo: {
        fontSize: '18px',
        color: '#012E40',
        paddingBottom: '5px'
    },
    sinopse: {
        fontSize: '16px',
        color: '#F2F2F2' 
    },
    botao: {
        padding: '10px',
        backgroundColor: '#026773',
        marginVertical: '20px',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
    },
    text_botao: {
        color: '#026773'
    }
})