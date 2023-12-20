import styled from 'styled-components'

export namespace TitleStyle {
    export const Container = styled.div<{ isLight?: boolean }>`
        ${({ theme, isLight }) => `
            ${theme.font.headline1};
            color: ${isLight ? theme.color.white : theme.color.darkgray};
            text-align: center;
            border-left: 5px solid ${isLight ? theme.color.white : theme.color.darkgray};
            border-right: 5px solid ${isLight ? theme.color.white : theme.color.darkgray};
            padding: 10px 20px;
        `}
    `
}
