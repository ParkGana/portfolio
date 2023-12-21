import { Title } from '@/src/components/title/title.view'
import { CareerStyle } from './career.style'
import { CareerItem } from '@/src/components/item/career-item.view'
import { CareerData } from './career.data'

export function Career() {
    return (
        <CareerStyle.Container id="career">
            <Title title={'CAREER'} />
            <CareerStyle.SafetyContainer>
                {CareerData.map((career, index) => (
                    <CareerItem key={index} data={career} />
                ))}
            </CareerStyle.SafetyContainer>
        </CareerStyle.Container>
    )
}
