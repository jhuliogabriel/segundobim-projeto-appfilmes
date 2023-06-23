import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgotPassword from "../pages/ForgotPasswordPage";

const Stack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name="Tela de Login" component={LoginPage} options={{ headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Tela de Registro" component={RegisterPage} options={{ headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Esqueceu Senha" component={ForgotPassword} options={{ headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}