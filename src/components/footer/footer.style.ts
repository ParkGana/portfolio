import styled from 'styled-components'

export namespace FooterStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            padding: 50px;
            background-color: ${theme.color.black};

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
