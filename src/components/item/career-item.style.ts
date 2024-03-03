import styled from 'styled-components'

export namespace CareerItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            width: 100%;
            display: grid;
            gap: 30px;
            padding: 20px;

            ${theme.ratio.size({
                large: `
                    grid-template-columns: 1fr 4fr;
                `,
                medium: `
                    grid-template-columns: 1fr 4fr;
                `,
                small: `
                    justify-items: center;
                `
            })}
        `}
    `

    export const Logo = styled.img`
        ${({ theme }) => `
            ${theme.ratio.size({
                large: `
                    width: 100%;
                `,
                medium: `
                    width: 100%;
                `,
                small: `
                    width: 200px;
                `
            })}
        `}
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            ${theme.ratio.size({
                large: `
                    border-left : 2px solid lightgray;
                `,
                medium: `
                    border-left : 2px solid lightgray;
                `,
                small: ``
            })}
        `}
    `

    export namespace Company {
        export const Container = styled.div`
            display: grid;
            gap: 20px;
            margin: 0 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid lightgray;
        `

        export const Name = styled.div`
            ${({ theme }) => `
                ${theme.font.title1};
            `}
        `

        export const Period = styled.div`
            ${({ theme }) => `
                ${theme.font.body1};
                color: ${theme.color.gray};
            `}
        `

        export const Explanation = styled.div`
            ${({ theme }) => `
                ${theme.font.body1};
            `}
        `

        export const Role = styled.div`
            ${({ theme }) => `
                ${theme.font.body1};
            `}
        `
    }

    export namespace Skill {
        export const Container = styled.div`
            display: grid;
            gap: 20px;
            margin: 0 30px;
            padding: 20px 0;
            border-bottom: 2px solid lightgray;
        `

        export const Title = styled.div`
            ${({ theme }) => `
                ${theme.font.title3};
            `}
        `

        export const Text = styled.div`
            ${({ theme }) => `
                ${theme.font.body1};
            `}
        `
    }

    export namespace Work {
        export const Container = styled.div`
            display: grid;
            gap: 30px;
            margin: 0 30px;
            padding-top: 20px;
        `

        export const SafetyContainer = styled.div`
            display: grid;
            gap: 10px;
        `

        export const Title = styled.div`
            ${({ theme }) => `
                ${theme.font.title3};
            `}
        `

        export const Explanation = styled.div`
            ${({ theme }) => `
                ${theme.font.body1};
                color: ${theme.color.darkgray};
            `}
        `

        export namespace Detail {
            export const Container = styled.div`
                ${({ theme }) => `
                    ${theme.font.title3};
                    display: grid;
                    grid-template-columns: 20px auto;
                    gap: 5px;
                `}
            `

            export const Icon = styled.img``

            export const Item = styled.div`
                ${({ theme }) => `
                    ${theme.font.body1};
                `}
            `
        }
    }
}
