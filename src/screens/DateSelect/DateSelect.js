import { CalendarSchedule } from "../../components/CalendarSchedule/CalendarSchedule";
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton";
import { SelectInputPicker } from "../../components/SelectInput/SelectInput";
import { ModalConfirmAppointment } from "../../components/Modal/Modal";
import { Container } from "../../components/Container/Styles";
import { ButtonEnter } from "../../components/Button/Button";
import { Title } from "../../components/Title/Styles";
import { useState } from "react";

export const DateSelect = ({navigation}) => {
    const [select, setSelect] = useState('')
    const [selectDate, setSelectDate] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Container>
            <Title>Selecionar data</Title>

            <CalendarSchedule
                selected={select}
                selectedDateDay={setSelect}
            />

            <SelectInputPicker
                textLabel={'Selecione um horário disponível'}
                textInput={'Selecionar horário'}
                selectedTime={setSelectDate}
            />

            <ButtonEnter
                onPress={() => setModalVisible(true)}
                placeholder={'confirmar'}
            />

            <ModalConfirmAppointment
                visible={modalVisible}
                animation={'fade'}
                onPressConfirm={() => {
                    setModalVisible(false)
                    navigation.replace("HomePatient")
                }}
                onPressCancel={() => setModalVisible(false)}
                date={select}
                appointmentTime={selectDate}
            />

            <ButtonSecondary
                onPress={() => navigation.replace("HomePatient")}
            />
        </Container>
    )
}