import { useHeader } from './header.hook'
import { HeaderStyle } from './header.style'

export function Header() {
    const { states, events } = useHeader()

    return (
        <HeaderStyle.Container id="header" isTop={states.isTop}>
            <HeaderStyle.SafetyContainer>
                <HeaderStyle.Logo onClick={events.onMoveToTop}>GANA</HeaderStyle.Logo>
                <HeaderStyle.Menu.Icon src={'/icons/menu.png'} onClick={events.onToggleMenu} />
                <HeaderStyle.Menu.Container isOpen={states.isOpen}>
                    <HeaderStyle.Menu.Item onClick={() => events.onClickMenu('information')}>
                        INFORMATION
                    </HeaderStyle.Menu.Item>
                    <HeaderStyle.Menu.Item onClick={() => events.onClickMenu('skill')}>SKILL</HeaderStyle.Menu.Item>
                    <HeaderStyle.Menu.Item onClick={() => events.onClickMenu('project')}>PROJECT</HeaderStyle.Menu.Item>
                    <HeaderStyle.Menu.Item onClick={() => events.onClickMenu('career')}>CAREER</HeaderStyle.Menu.Item>
                </HeaderStyle.Menu.Container>
            </HeaderStyle.SafetyContainer>
        </HeaderStyle.Container>
    )
}
