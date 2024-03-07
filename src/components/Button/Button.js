import { Button, ButtonMedicRecord, ButtonTitle, ButtonTitleGoogle, GoogleButton, GreyButton, ModalAppointmentButton, ModalConfirmAppointmentButton } from "./Styles"
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


export const ButtonEnter = ({ onPress, placeholder }) => {
    return (
        <Button onPress={onPress}>
            <ButtonTitle>{placeholder}</ButtonTitle>
        </Button>
    )
}

export const ButtonGrey = ({ onPress, placeholder }) => {
    return (
        <GreyButton onPress={onPress}>
            <ButtonTitle>{placeholder}</ButtonTitle>
        </GreyButton>
    )
}

export const ButtonGoogle = ({ onPress, placeholder }) => {
    return (
        <GoogleButton onPress={onPress}>
            <AntDesign name="google" size={20} color="#496BBA" />
            <ButtonTitleGoogle>{placeholder}</ButtonTitleGoogle>
        </GoogleButton>
    )
}

export const ButtonModalAppointment = ({onPress, placeholder}) => {
    return (
        <ModalAppointmentButton onPress={onPress}>
            <ButtonTitle>{placeholder}</ButtonTitle>
        </ModalAppointmentButton>
    )
}

export const ButtonModalConfirmAppointment = ({onPress, placeholder}) => {
    return (
        <ModalConfirmAppointmentButton onPress={onPress}>
            <ButtonTitle>{placeholder}</ButtonTitle>
        </ModalConfirmAppointmentButton>
    )
}

export const MedicRecordButton = ({onPress, placeholder}) => {
    return(
        <ButtonMedicRecord onPress={onPress}>
            <ButtonTitle><MaterialCommunityIcons name="camera-plus-outline" size={24} color="white"/>  {placeholder}</ButtonTitle>
        </ButtonMedicRecord>
    )
}