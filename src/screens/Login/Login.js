import { ContentAccount, TextAccount } from "../../components/ContentAccount/Styles";
import { ButtonEnter, ButtonGoogle } from "../../components/Button/Button";
import { LinkAccount, LinkMedium } from "../../components/Links/Styles";
import { Container } from "../../components/Container/Styles";
import { Title } from "../../components/Title/Styles";
import { Input } from "../../components/Input/Styles";
import { Logo } from "../../components/Logo/Styles";
import { useState } from "react";

export const Login = ({ navigation , checkHome}) => {
    const [userEmail, setUserEmail ] = useState('dr.marcos@gmail.com')

    function Login() {
        if (userEmail === 'dr.marcos@gmail.com') {
            checkHome ='HomeMedic'
        } else {
            checkHome = 'HomePatient'
        }
        navigation.replace("Main", { check: checkHome })
    }
    return (
        <Container>

            <Logo source={require('../../assets/VitalHub-logo2.png')} />

            <Title >Entrar ou criar conta</Title>

            <Input placeholder={'Usuário ou E-mail'}
                value={userEmail}
                onChangeText={(txt) => setUserEmail(txt)}
            />
            <Input placeholder={'Senha'}
                value={'123'}
                secureTextEntry={false} 
            />

            <LinkMedium onPress={() => navigation.replace("Reset")}>Esqueceu sua senha?</LinkMedium>

            <ButtonEnter
                onPress={() => Login()}
                placeholder={'Entrar'}
            />

            <ButtonGoogle
                placeholder={'Entrar com o Google'}
            />

            <ContentAccount>
                <TextAccount>Não tem conta? </TextAccount>
                <LinkAccount onPress={() => navigation.replace("Register")}>Crie uma conta agora!</LinkAccount>
            </ContentAccount>

        </Container>
    )
}