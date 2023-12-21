import styled from 'styled-components'

export namespace CareerStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            justify-items: center;
            align-items: center;
            gap: 50px;
            padding: 50px;
            background-color: ${theme.color.lightgray};
        `}
    `

    export const SafetyContainer = styled.div`
        max-width: 1200px;
        display: grid;
        align-items: start;
        gap: 50px;
    `
}
