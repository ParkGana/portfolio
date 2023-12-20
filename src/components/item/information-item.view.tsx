import { InformationItemStyle } from './information-item.style'

export function InformationItem({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
        <InformationItemStyle.Container>
            <InformationItemStyle.Icon src={icon} alt="icon" />
            <InformationItemStyle.SafetyContainer>
                <InformationItemStyle.Title>{title}</InformationItemStyle.Title>
                <InformationItemStyle.Description>{description}</InformationItemStyle.Description>
            </InformationItemStyle.SafetyContainer>
        </InformationItemStyle.Container>
    )
}
