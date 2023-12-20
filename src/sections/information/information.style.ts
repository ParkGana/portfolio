import styled from 'styled-components'

export namespace InformationStyle {
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
        ${({ theme }) => `
            max-width: 1200px;
            display: grid;
            gap: 30px;

            ${theme.ratio.size({
                large: `
                    grid-template-columns: repeat(3, 1fr);
                `,
                medium: `
                    grid-template-columns: repeat(2, 1fr);
                `,
                small: ``
            })}
        `}
    `
}
