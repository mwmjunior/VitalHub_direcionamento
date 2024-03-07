import { GenericInput, GenericProfileAddressInput } from "../../components/GenericProfileInput/GenericProfileInput";
import { GenericProfileInputContainerRow } from "../../components/GenericProfileInput/Styles";
import { Container, ContainerScrollView } from "../../components/Container/Styles";
import { UserProfilePhoto } from "../../components/UserProfilePhoto/Styles";
import { ButtonEnter, ButtonGrey } from "../../components/Button/Button";
import { SubTitle } from "../../components/SubTitle/Styles";
import { Title } from "../../components/Title/Styles";


export const UserProfile = ({ navigation }) => {
    return (
        <ContainerScrollView>
            <Container>
                <UserProfilePhoto source={require('../../assets/foto-de-perfil.png')} />

                <Title>Richard Kosta</Title>

                <SubTitle>richard.kosta@gmail.com</SubTitle>

                <GenericInput
                    textLabel={'Data de Nascimento: '}
                    placeholder={'05/10/1995'}
                />
                <GenericInput
                    textLabel={'CPF: '}
                    placeholder={'756********'}
                />
                <GenericInput
                    textLabel={'Endereço: '}
                    placeholder={'Rua Vitor Jose de Castro, 50'}
                />

                <GenericProfileInputContainerRow>
                    <GenericProfileAddressInput
                        textLabel={'Cep: '}
                        placeholder={'09041-50'}
                    />
                    <GenericProfileAddressInput
                        textLabel={'Cidade: '}
                        placeholder={'Sao Paulo-SP'}
                    />
                </GenericProfileInputContainerRow>

                <ButtonEnter
                    placeholder={'salvar'}
                />

                <ButtonEnter
                    placeholder={'editar'}
                />

                <ButtonGrey
                    onPress={() => navigation.replace('Login')}
                    placeholder={'Sair do app'}
                />
            </Container>
        </ContainerScrollView>
    )
}