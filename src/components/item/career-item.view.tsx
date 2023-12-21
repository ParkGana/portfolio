import { CareerDataType } from '@/src/sections/career/career.data'
import { CareerItemStyle } from './career-item.style'

export function CareerItem({ data }: { data: CareerDataType }) {
    return (
        <CareerItemStyle.Container>
            <CareerItemStyle.Logo src={data.company.logo} alt="logo" />
            <CareerItemStyle.SafetyContainer>
                <CareerItemStyle.Company.Container>
                    <CareerItemStyle.Company.Name>{data.company.name}</CareerItemStyle.Company.Name>
                    <CareerItemStyle.Company.Period>{data.company.period}</CareerItemStyle.Company.Period>
                    <CareerItemStyle.Company.Explanation>
                        {data.company.explanation}
                    </CareerItemStyle.Company.Explanation>
                    <CareerItemStyle.Company.Role>{data.company.role}</CareerItemStyle.Company.Role>
                </CareerItemStyle.Company.Container>
                <CareerItemStyle.Work.Container>
                    {data.work.map((work, index) => (
                        <CareerItemStyle.Work.SafetyContainer key={index}>
                            <CareerItemStyle.Work.Title>{work.title}</CareerItemStyle.Work.Title>
                            {work.explanation && (
                                <CareerItemStyle.Work.Explanation>{work.explanation}</CareerItemStyle.Work.Explanation>
                            )}
                            {work.detail.map((item, index) => (
                                <CareerItemStyle.Work.Detail.Container key={index}>
                                    <CareerItemStyle.Work.Detail.Icon src={'/icons/list-li.png'} alt="item" />
                                    <CareerItemStyle.Work.Detail.Item>{item}</CareerItemStyle.Work.Detail.Item>
                                </CareerItemStyle.Work.Detail.Container>
                            ))}
                        </CareerItemStyle.Work.SafetyContainer>
                    ))}
                </CareerItemStyle.Work.Container>
            </CareerItemStyle.SafetyContainer>
        </CareerItemStyle.Container>
    )
}
