import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import CardFilme from '../../components/CardFilme';
import styles from "./style";

export default function CatalogoFilmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(function(){
        fetch('https://api.otaviolube.com/api/filmes?populate=*')
        .then(response => response.json())
        .then(objeto => setFilmes(objeto.data))
        .catch(error => console.error(error))
    }, []);

    return (
        <View style={styles.container}>
        { filmes.length > 0 ? filmes.map(filme => <CardFilme key={filme.id} filme={filme}/>) : <ActivityIndicator size={'large'}/>}
        </View>
    );
}