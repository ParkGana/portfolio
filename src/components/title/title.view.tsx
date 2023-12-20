import { TitleStyle } from './title.style'

export function Title({ title, light }: { title: string; light?: boolean }) {
    return <TitleStyle.Container isLight={light}>{title}</TitleStyle.Container>
}
