
import { useAuth } from "../contexts/AuthContext";
import AuthRoutes from "./app.auth";
import AppRoutes from "./auth.routes";
import { View } from "react-native-web";
import { ActivityIndicator } from "react-native";

export default function Routes(){
    
    const { logado, loading } = useAuth();

    if(loading)
    {
        return (
            <View style={{flex:1,
            alignItens: 'center',
            justifyContent: 'center'}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
            </View>
        )
    }

    return(
        logado == false ? <AppRoutes /> : <AuthRoutes />
    )
}