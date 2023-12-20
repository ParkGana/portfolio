import styled from 'styled-components'

export namespace MainStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            height: 100vh;
            background-color: ${theme.color.white};

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
