import styled from 'styled-components'

export namespace SkillStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            justify-items: center;
            align-items: center;
            gap: 50px;
            padding: 50px;
            background-color: ${theme.color.darkgray};
        `}
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            max-width: 1200px;
            display: grid;
            align-items: start;
            gap: 50px;
            padding: 20px;

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

    export const GridContainer = styled.div<{ last?: boolean }>`
        ${({ theme, last }) => `
            display: grid;
            align-items: start;
            gap: 50px;

            ${theme.ratio.size({
                large: ``,
                medium: `
                    ${
                        last &&
                        `
                            grid-column: auto / span 2; 
                            grid-template-columns: repeat(2, 1fr);
                        `
                    };
                `,
                small: ``
            })}
        `}
    `
}
