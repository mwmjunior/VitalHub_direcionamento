//importar o recurso do button tab
import { ContentIcon, TextIcon } from './Style'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProfile } from "../PerfilPaciente/UserProfile";
import { HomeMedic } from "../HomeMedico/HomeMedico";
import { HomePatient } from '../HomePaciente/HomePaciente';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export const Main = ({route}) => {
    const {check} = route.params;
    return (
        <BottomTab.Navigator
            //definir a rota inicial
            initialRouteName={{check}}

            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: '#FFFFFF', height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: 'transparent',
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? '#ECF2FF' : 'transparent'}
                            >
                                {focused ? 
                                <FontAwesome5 name="calendar-check" size={22} color="#607EC5" /> 
                                :
                                <FontAwesome name='calendar' size={22} color='#4E4B59' />
                                }
                                {focused && <TextIcon>agenda</TextIcon>}
                            </ContentIcon>

                        )
                    } else {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? '#ECF2FF' : 'transparent'}
                            >
                                <FontAwesome5 name='user-circle' size={22} color={focused ? '#607EC5' : '#4E4B59'} />
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>

                        )
                    }
                }
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={check === 'HomeMedic' ? HomeMedic : HomePatient }
            />



            <BottomTab.Screen
                name="UserProfile"
                component={UserProfile}
            />

        </BottomTab.Navigator>
    )
}