import styled from 'styled-components'

export namespace SkillItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            align-content: start;
            gap: 20px;
            border: 5px solid ${theme.color.white};
            border-radius: 20px;
            padding: 20px;
        `}
    `

    export const SafetyContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(2, auto);
        gap: 10px;
    `

    export const Title = styled.div`
        ${({ theme }) => `
            ${theme.font.title1};
            color: ${theme.color.gray};
            text-align: center;
        `}
    `

    export const Image = styled.img`
        width: 120px;
    `
}
