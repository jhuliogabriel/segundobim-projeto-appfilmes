import { createStackNavigator } from "@react-navigation/stack";
import CatalogoFilmes from "../pages/CatalogoFilmesPage";
import MovieDetails from "../pages/MovieDetailsPage";

const Stack = createStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator>
          <Stack.Screen name="Catálogo de Filmes" component={CatalogoFilmes} options={{ headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Detalhes do Filme" component={MovieDetails} options={{ headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}