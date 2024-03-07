import { GenericInput, GenericProfileAddressInput } from "../../components/GenericProfileInput/GenericProfileInput";
import { GenericProfileInputContainerRow } from "../../components/GenericProfileInput/Styles";
import { Container, ContainerScrollView } from "../../components/Container/Styles";
import { MapClinic } from "../../components/MapClinic/Styles";
import { SubTitle } from "../../components/SubTitle/Styles";
import { Title } from "../../components/Title/Styles";
import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton";


export const ClinicLocation = ({navigation}) => {
    return (
        <ContainerScrollView>
            <Container>
                <MapClinic source={require('../../assets/map-clinic.png')} />

                <Title>Clínica Natureh</Title>
                <SubTitle>São Paulo, SP</SubTitle>

                <GenericInput
                    textLabel={'Endereço'}
                    placeholder={'Rua Manoel da Nobrega, 444'}
                />
                <GenericProfileInputContainerRow>
                    <GenericProfileAddressInput
                        textLabel={'Número'}
                        placeholder={'578'}
                    />

                    <GenericProfileAddressInput
                        textLabel={'Zona 01'}
                        placeholder={'Cianorte-Pr'}
                    />
                </GenericProfileInputContainerRow>

                <ButtonSecondary
                    placeholder={'voltar'}
                    onPress={() => navigation.replace('HomePatient')}
                />

            </Container>
        </ContainerScrollView>
    )
}