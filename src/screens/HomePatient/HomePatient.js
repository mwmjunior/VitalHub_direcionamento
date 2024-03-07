import { ScheduleAppointmentButton } from "../../components/ScheduleAppointmentButton/ScheduleAppointmentButton";
import { FilterStatusButton } from "../../components/StatusButton/StatusButton";
import { StatusButtonContainer } from "../../components/StatusButton/Styles";
import { CardMedicList } from "../../components/CardList/CardList";
import { Calendar } from "../../components/Calendar/Calendar";
import { Container } from "../../components/Container/Styles";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

const cardsMedic = [{
    id: '1', img: require('../../assets/foto-de-perfil-medico.png'),
    situation: 'pendente', name: 'Dr.Claudio', age: '22 anos',
    query: 'Rotina', schedule: '14:00', email: 'doutor.claudio@gmail.com',
    crm: 'CRM-15286', specialty: 'Clinico Geral'
},
{
    id: '2', 
    img: require('../../assets/foto-de-perfil-medico.png'),
    situation: 'realizada', 
    name: 'Dr. Claudio', 
    age: '22 anos',
    query: 'Rotina', 
    schedule: '14:00', 
    email: 'doutor.claudio@gmail.com',
    crm: 'CRM-15286', 
    specialty: 'Clínico Geral'
}
]

export const HomePatient = ({ navigation }) => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <Header
                userName={'Richard Kosta'}
                userPhoto={require('../../assets/foto-de-perfil.png')}
            />
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

            <CardMedicList
                status={statusLista}
                cardsData={cardsMedic}
                navi={navigation}
            />

            <ScheduleAppointmentButton
                onPressConfirmAppointment={() => {
                    setModalVisible(false)
                    navigation.navigate("ClinicSelect")
                }}
                visible={modalVisible}
                onPressModal={() => setModalVisible(true)}
                onPressCancel={() => setModalVisible(false)}
            />

        </Container>
    )
}