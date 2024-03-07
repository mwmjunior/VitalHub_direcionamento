import { FilterStatusButton } from "../../components/StatusButton/StatusButton";
import { StatusButtonContainer } from "../../components/StatusButton/Styles";
import { CardList } from "../../components/CardList/CardList";
import { Container } from "../../components/Container/Styles"
import { Calendar } from "../../components/Calendar/Calendar";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

const cardsPatient = [
    {
        id: 1, img: require('../../assets/foto-de-perfil-2.png'),
        situation: 'pendente', name: 'Nicole Sarga', age: '22 anos',
        query: 'Rotina', schedule: '14:00', email: 'niccole.sarga@gmail.com'
    },
    {
        id: 2, img: require('../../assets/foto-de-perfil.png'),
        situation: 'pendente', name: 'Richard Kosta', age: '28 anos',
        query: 'Urgência', schedule: '15:00', email: 'richard.kosta@gmail.com'
    },
    {
        id: 3, img: require('../../assets/foto-de-perfil-2.png'),
        situation: 'realizada', name: 'Nicole Sarga', age: '22 anos',
        query: 'Rotina', schedule: '14:00', email: 'niccole.sarga@gmail.com'
    },
    {
        id: 4, img: require('../../assets/foto-de-perfil.png'),
        situation: 'realizada', name: 'Richard Kosta', age: '28 anos',
        query: 'Urgência', schedule: '15:00', email: 'richard.kosta@gmail.com'
    },
    {
        id: 5, img: require('../../assets/foto-de-perfil-3.png'),
        situation: 'cancelada', name: 'Joao da silva', age: '62 anos',
        query: 'Consulta', schedule: '15:00', email: 'joao.@gmail.com'
    }
]

export const HomeMedic = ({navigation}) => {
    const [statusLista, setStatusLista] = useState("pendente");
    return (
        <Container>
            <Header 
            userName={'Dr.Claudio'}
            userPhoto={require('../../assets/foto-de-perfil-medico.png')}/>
            <Calendar />

            <StatusButtonContainer>
                <FilterStatusButton
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <FilterStatusButton
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizada"}
                    onPress={() => setStatusLista("realizada")}
                />
                <FilterStatusButton
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelada"}
                    onPress={() => setStatusLista("cancelada")}
                />
            </StatusButtonContainer>

            <CardList
                status={statusLista}
                cardsData={cardsPatient}
                navi={navigation}
            />
        </Container>
    )
}