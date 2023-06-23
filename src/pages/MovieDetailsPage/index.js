import { Text } from "react-native";
import styles from "./styles";

export default function MovieDetails({route}) {

    const { filme } = route.params;

    return(
        <View>
            <Text>Detalhes do Filme</Text>
            <Text>{filme.titulo}</Text>
            <Text>{filme.subtitulo}</Text>
            <Text>{filme.sinopse}</Text>
        </View>
    );
}