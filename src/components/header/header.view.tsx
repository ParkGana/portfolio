import { useHeader } from './header.hook'
import { HeaderStyle } from './header.style'

export function Header() {
    const { states } = useHeader()

    return <HeaderStyle.Container id="header" isTop={states.isTop}></HeaderStyle.Container>
}
