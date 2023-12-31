import { NavigationContainer } from "@react-navigation/native";
import  { AuthProvider } from "./contexts/AuthContext";
import Routes from "./routes/";



export default function App() {
  return(
    <NavigationContainer>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </NavigationContainer>
  );
  

}
