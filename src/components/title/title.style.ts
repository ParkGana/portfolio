import styled from 'styled-components'

export namespace TitleStyle {
    export const Container = styled.div<{ isLight?: boolean }>`
        ${({ theme, isLight }) => `
            ${theme.font.headline1};
            color: ${isLight ? theme.color.white : theme.color.black};
            text-align: center;

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
