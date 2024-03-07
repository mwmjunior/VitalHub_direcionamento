import { GenericInput, GenericPrescriptionInput, GenericTextArea } from "../../components/GenericProfileInput/GenericProfileInput";
import { GenericProfileInputContainerRow } from "../../components/GenericProfileInput/Styles";
import { Container, ContainerScrollView } from "../../components/Container/Styles";
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton";
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles";
import { MedicRecordButton } from "../../components/Button/Button";
import { SubTitle } from "../../components/SubTitle/Styles";
import { CardLinkText } from "../../components/Card/Style";
import { Title } from "../../components/Title/Styles";


export const MedicRecord = ({ navigation }) => {
    return (
        <ContainerScrollView>
            <Container>
                <UserProfilePhoto source={require('../../assets/foto-de-perfil-medico.png')} />
                <Title>Dr. Claudio</Title>

                <SubTitle>Cliníco geral    <SubTitle>CRM-15286</SubTitle></SubTitle>

                <GenericTextArea
                    textLabel={'Descrição da Consulta'}
                    placeholder={`O paciente possuí uma infecção no ouvido. Necessario repouso de 2 dias e acompanhamento médico constante.`}
                />

                <GenericInput
                    textLabel={'Diagnóstico do paciente'}
                    placeholder={'Infecção no ouvindo'}
                />

                <GenericTextArea
                    textLabel={'Descrição da Consulta'}
                    placeholder={`Medicamento: Advil \nDosagem: 50 mg \nFrequência: 3 vezes ao dia \nDuração: 3 dias`}
                />

                <GenericPrescriptionInput
                    textLabel={'Prescrição médica'}
                    placeholder={`Nenhuma foto informada`}
                />

                <GenericProfileInputContainerRow>
                    <MedicRecordButton placeholder={'Enviar'} />
                    <CardLinkText> Cancelar </CardLinkText>
                </GenericProfileInputContainerRow>

                <GenericTextArea
                    placeholder={`Resultado do exame de sangue : \ntudo normal`}
                />
                <ButtonSecondary
                    onPress={() => navigation.navigate('HomePatient')}
                    placeholder={'voltar'}
                />
            </Container>
        </ContainerScrollView>
    )
}