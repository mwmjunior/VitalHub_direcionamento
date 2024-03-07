import {
    RealizedScheduleTime,
    RealizedTimeContainer,
    ScheduleClinicContainer,
    ScheduleContainer,
    ScheduleTime
} from "../ScheduleCard/Styles";
import {
    CardClinicContainer,
    CardClinicContent,
    CardContainer,
    CardContainerText,
    CardLinkText,
    CardMedicContainer,
    CardMedicSelectContainer,
    RealizedCardLinkText
} from "./Style";
import { SubTitleCard, SubTitleCardAge, SubTitleCardScore, SubTitleClinicCard, SubTitleMedicCard } from "../SubTitle/Styles";
import { ModalAppointment, ModalLocalAppointment } from "../Modal/Modal";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { UserProfilePhotoCard } from "../UserProfilePhoto/Styles";
import { TitleCard } from "../Title/Styles";
import { useState } from "react";

export const AppointmentCard = ({ id, img, name, navi, age, query, schedule, email, situation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <CardContainer>
            <UserProfilePhotoCard source={img} />
            <CardContainerText>
                <TitleCard>{name}</TitleCard>
                <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                {situation == 'pendente' ? (
                    <ScheduleContainer>
                        <ScheduleTime> <AntDesign name="clockcircle" size={14} color="#49B3BA" />  {schedule}</ScheduleTime>
                    </ScheduleContainer>
                ) : (
                    <RealizedTimeContainer>
                        <RealizedScheduleTime> <AntDesign name="clockcircle" size={14} color="#4E4B59" />  {schedule}</RealizedScheduleTime>
                    </RealizedTimeContainer>
                )}
            </CardContainerText>
            {situation == 'pendente' ? (
                <>
                    <CardLinkText onPress={() => setModalVisible(true)}> Cancelar </CardLinkText>
                    <ModalAppointment
                        visible={modalVisible}
                        onPressCancel={() => setModalVisible(false)}
                        animation={'fade'}
                        transparent={true}
                        id={id}
                        img={img}
                        name={name}
                        age={age}
                        email={email}
                        situation={situation}
                    />
                </>
            ) : (null)}
            {situation == 'realizada' ? (
                <>
                    <RealizedCardLinkText onPress={() => setModalVisible(true)}>Ver Prontuário</RealizedCardLinkText>
                    <ModalAppointment
                        visible={modalVisible}
                        onPressCancel={() => setModalVisible(false)}
                        onPressConfirm={() => {
                            setModalVisible(false)
                            navi.navigate("MedicalRecord", { userImg: img, userName: name, userAge: age, userEmail: email })
                        }}
                        animation={'fade'}
                        transparent={true}
                        id={id}
                        img={img}
                        name={name}
                        age={age}
                        email={email}
                        situation={situation}
                    />
                </>
            ) : (<CardLinkText>           </CardLinkText>)}
        </CardContainer >
    )
}

export const AppointmentMedicCard = ({ id, img, name, age, navi, query, crm, specialty, schedule, email, situation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalLocalVisible, setModalLocalVisible] = useState(false);
    return (
        <CardMedicContainer onPress={() => setModalLocalVisible(true)}>
            <>
                <UserProfilePhotoCard source={img} />
                <CardContainerText>
                    <TitleCard>{name}</TitleCard>
                    <SubTitleCardAge>{age}  <SubTitleCard>{query}</SubTitleCard></SubTitleCardAge>
                    <ModalLocalAppointment
                        visible={modalLocalVisible}
                        onPressCancel={() => setModalLocalVisible(false)}
                        onPressConfirm={() => {
                            setModalLocalVisible(false)
                            navi.navigate("ClinicLocation")
                        }}
                        animation={'fade'}
                        transparent={true}
                        id={id}
                        img={img}
                        name={name}
                        crm={crm}
                        specialty={specialty}
                    />
                    {situation == 'pendente' ? (
                        <ScheduleContainer>
                            <ScheduleTime> <AntDesign name="clockcircle" size={14} color="#49B3BA" />  {schedule}</ScheduleTime>
                        </ScheduleContainer>
                    ) : (
                        <RealizedTimeContainer>
                            <RealizedScheduleTime> <AntDesign name="clockcircle" size={14} color="#4E4B59" />  {schedule}</RealizedScheduleTime>
                        </RealizedTimeContainer>
                    )}
                </CardContainerText>
                {situation == 'pendente' ? (
                    <>
                        <CardLinkText onPress={() => setModalVisible(true)}> Cancelar </CardLinkText>
                        <ModalAppointment
                            visible={modalVisible}
                            onPress={() => setModalVisible(false)}
                            animation={'fade'}
                            transparent={true}
                            id={id}
                            img={img}
                            name={name}
                            age={age}
                            email={email}
                            situation={situation}
                        />
                    </>
                ) : (null)}
                {situation == 'realizada' ? (
                    <>
                        <RealizedCardLinkText onPress={() => setModalVisible(true)}>Ver Prontuário</RealizedCardLinkText>
                        <ModalAppointment
                            visible={modalVisible}
                            onPress={() => setModalVisible(false)}
                            animation={'fade'}
                            transparent={true}
                            id={id}
                            img={img}
                            name={name}
                            age={age}
                            email={email}
                            situation={situation}
                        />
                    </>
                ) : (<CardLinkText>           </CardLinkText>)}
            </>
        </CardMedicContainer >
    )
}

export const ClinicSelectCard = ({ id, clinicName, onPress, isSelect = false, score, city, uf, days }) => {
    return (
        <CardClinicContainer isSelect={isSelect} onPress={onPress}>
            <>
                <CardClinicContent>
                    <TitleCard>{clinicName}</TitleCard>
                    <SubTitleCardScore><AntDesign name="star" size={16} color="#F9A620" />{score}</SubTitleCardScore>
                </CardClinicContent>

                <CardClinicContent>
                    <SubTitleClinicCard>{city}, {uf}</SubTitleClinicCard>
                    <ScheduleClinicContainer>
                        <ScheduleTime><MaterialCommunityIcons name="calendar-outline" size={16} color="#49B3BA" /> {days}</ScheduleTime>
                    </ScheduleClinicContainer>
                </CardClinicContent>
            </>
        </CardClinicContainer>
    )
}

export const MedicSelectCard = ({ id, img, medicName, onPress, isSelect = false, speciality }) => {
    return (
        <CardMedicSelectContainer isSelect={isSelect} onPress={onPress}>
            <>
                <UserProfilePhotoCard source={img} />
                <CardContainerText>
                    <TitleCard>{medicName}</TitleCard>
                    <SubTitleMedicCard>{speciality}</SubTitleMedicCard>
                </CardContainerText>
            </>
        </CardMedicSelectContainer>
    )
}