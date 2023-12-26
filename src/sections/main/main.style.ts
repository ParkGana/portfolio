import styled from 'styled-components'

export namespace MainStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            height: 100vh;
            display: grid;
            justify-items: center;
            align-items: center;
            background-color: ${theme.color.white};
        `}
    `

    export const Text = styled.div`
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
        text-align: center;
    `
}
