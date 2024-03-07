import { Quicksand_500Medium, Quicksand_400Regular, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
import { ClinicLocation } from './src/screens/LocalConsulta/LocalConsulta';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MedicalRecord } from './src/screens/PacienteProntuario/PacienteProntuario';
import { ResetPassword } from './src/screens/RedefinirSenha/RedefinirSenha';
import { ClinicSelect } from './src/screens/SelecionarClinica/SelecionarClinica';
import { MedicSelect } from './src/screens/SelecionarMedico/SelecionarMedico';
import { MedicRecord } from './src/screens/MedicoProntuario/MedicoProntuario';
import { UserProfile } from './src/screens/PerfilPaciente/UserProfile';
import { HomePatient } from './src/screens/HomePaciente/HomePaciente'
import { DateSelect } from './src/screens/SelecionarData/SelecionarData';
import { Navegation } from './src/screens/Navegacao/Navegacao';
import { NavigationContainer } from '@react-navigation/native';
import { EmailCode } from './src/screens/VerifiqueSeuEmail/VerifiqueSeuEmail';
import { HomeMedic } from './src/screens/HomeMedico/HomeMedico';
import { Register } from './src/screens/CriarConta/CriarConta';
import { Login } from './src/screens/Login/Login';
import { Reset } from './src/screens/RecuperarSenha/RecuperarSenha';
import { StatusBar } from 'expo-status-bar';

//Instancia do stack navigator
const Stack = createNativeStackNavigator();

import {
  useFonts, MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates';
import { Main } from './src/screens/Main/Main';

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    //Navigation
    //Conatainer
    //Stack Navigation
    //Stack Secreen

    <NavigationContainer>
      <StatusBar />

      <Stack.Navigator
       // Define um navegador de pilha para gerenciar a navegação entre diferentes telas.
       screenOptions={{ headerShown : false}} // Define as opções de tela padrão para todas as telas dentro do navegador de pilha, onde o cabeçalho não será exibido.
      >
    

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: 'Login' }}
        />
        
        <Stack.Screen
          name='Main'
          component={Main}
        />

        {/* <Stack.Screen
          //Nome da tela
          name='Navegacao'
          //Componente que sera chamado
          component={Navegation}
          options={{ title: 'Navegacao' }}
        /> */}


        <Stack.Screen
          name='Reset'
          component={Reset}
          options={{ title: 'Reset' }}
        />

        <Stack.Screen
          name='Register'
          component={Register}
          options={{ title: 'Register' }}
        />

        <Stack.Screen
          name='EmailCode'
          component={EmailCode}
          options={{ title: 'EmailCode' }}
        />

        <Stack.Screen
          name='ResetPassword'
          component={ResetPassword}
          options={{ title: 'ResetPassword' }}
        />

        <Stack.Screen
          name='UserProfile'
          component={UserProfile}
          options={{ title: 'UserProfile' }}
        />

        <Stack.Screen
          name='ClinicLocation'
          component={ClinicLocation}
          options={{ title: 'ClinicLocation' }}
        />

        <Stack.Screen
          name='HomeMedic'
          component={HomeMedic}
          options={{ title: 'HomeMedic' }}
        />

        <Stack.Screen
          name='MedicalRecord'
          component={MedicalRecord}
          options={{ title: 'MedicalRecord' }}
        />

        <Stack.Screen
          name='HomePatient'
          component={HomePatient}
          options={{ title: 'HomePatient' }}
        />

        <Stack.Screen
          name='ClinicSelect'
          component={ClinicSelect}
          options={{ title: 'ClinicSelect' }}
        />
        <Stack.Screen
          name='MedicSelect'
          component={MedicSelect}
          options={{ title: 'MedicSelect' }}
        />

        <Stack.Screen
          name='DateSelect'
          component={DateSelect}
          options={{ title: 'DateSelect' }}
        />

        <Stack.Screen
          name='MedicRecord'
          component={MedicRecord}
          options={{ title: 'MedicRecord' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}