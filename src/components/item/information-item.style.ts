import styled from 'styled-components'

export namespace InformationItemStyle {
    export const Container = styled.div`
        max-width: 300px;
        display: grid;
        grid-template-columns: 30px auto;
        gap: 20px;
        padding: 20px;
    `

    export const SafetyContainer = styled.div`
        display: grid;
        gap: 10px;
    `

    export const Icon = styled.img``

    export const Title = styled.div`
        ${({ theme }) => `
            ${theme.font.title2};
        `}
    `

    export const Description = styled.div`
        ${({ theme }) => `
            ${theme.font.body1};
            color: ${theme.color.darkgray};
        `}
    `
}
