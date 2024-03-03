import { SkillItemStyle } from './skill-item.style'

export function SkillItem({ title, items }: { title: string; items: string[] }) {
    return (
        <SkillItemStyle.Container>
            <SkillItemStyle.Title>{title}</SkillItemStyle.Title>
            <SkillItemStyle.SafetyContainer>
                {items.map((item, index) => (
                    <SkillItemStyle.Image key={index} src={`/images/skill/${item}.png`} alt="image" />
                ))}
            </SkillItemStyle.SafetyContainer>
        </SkillItemStyle.Container>
    )
}
