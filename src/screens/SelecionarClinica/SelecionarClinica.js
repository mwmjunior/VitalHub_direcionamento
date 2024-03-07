import { ButtonSecondary } from "../../components/SecondaryButton/SecondaryButton";
import { ClinicCardList } from "../../components/CardList/CardList";
import { Container } from "../../components/Container/Styles";
import { ButtonEnter } from "../../components/Button/Button";
import { Title } from "../../components/Title/Styles";

const clinicCards = [
    { id: 1, clinicName: 'Clínica São José', score: '4,3', city: 'Campinas', uf: 'SP', days: 'Seg-Sex' },
    { id: 2, clinicName: 'Clínica São Lucas', score: '4,6', city: 'Sorocaba', uf: 'SP', days: 'Seg-Sex' },
    { id: 3, clinicName: 'Clínica São Mateus', score: '4,0', city: 'Ribeirão Preto', uf: 'SP', days: 'Seg-Sab' },
    { id: 4, clinicName: 'Clínica São João', score: '4,1', city: 'Bauru', uf: 'SP', days: 'Seg-Sab' },
]

export const ClinicSelect = ({ navigation }) => {
    return (
        <Container>
            <Title>Selecionar Clínica</Title>

            <ClinicCardList
                cardsData={clinicCards}
            />

            <ButtonEnter
                onPress={() => navigation.replace("MedicSelect")}
                placeholder={'confirmar'}
            />

            <ButtonSecondary
                onPress={() => navigation.replace("HomePatient")}
            />
        </Container>
    )
}