import styled from 'styled-components'

export namespace ProjectItemStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            display: grid;
            align-content: start;
            gap: 20px;
            background-color: ${theme.color.white};
            border-radius: 20px;
            padding: 30px;
        `}
    `

    export const SafetyContainer = styled.div<{ isApp: boolean }>`
        ${({ theme, isApp }) => `
            display: grid;
            justify-items: center;
            gap: 30px;

            ${theme.ratio.size({
                large: `
                    grid-template-columns: 1fr ${isApp ? '3fr' : '1.5fr'};
                `,
                medium: ``,
                small: ``
            })}
        `}
    `

    export const Title = styled.div`
        ${({ theme }) => `
            ${theme.font.headline2};
            text-align: center;
        `}
    `

    export const Period = styled.div`
        ${({ theme }) => `
            ${theme.font.body1};
            color: ${theme.color.gray};
            text-align: center;
        `}
    `

    export const Thumbnail = styled.img<{ isApp: boolean }>`
        ${({ theme, isApp }) => `
            width: 100%;
            border: 3px solid ${theme.color.gray};
            cursor: pointer;

            ${theme.ratio.size({
                large: ``,
                medium: `
                    max-width: ${isApp ? '250px' : '500px'};
                `,
                small: `
                    max-width: ${isApp ? '250px' : '500px'};
                `
            })}
        `}
    `

    export namespace Contents {
        export const Container = styled.div``

        export namespace Feeling {
            export const Container = styled.div`
                display: grid;
                gap: 20px;
                padding-bottom: 20px;
                border-bottom: 2px solid lightgray;
            `

            export const Text = styled.div`
                ${({ theme }) => `
                    ${theme.font.body1};
                `}
            `
        }

        export namespace Information {
            export const Container = styled.div`
                display: grid;
                gap: 30px;
                padding-top: 20px;
            `

            export const SafetyContainer = styled.div`
                display: grid;
                grid-template-columns: 100px auto;
            `

            export const Field = styled.div`
                ${({ theme }) => `
                    ${theme.font.title3};
                `}
            `

            export const Value = styled.div`
                ${({ theme }) => `
                    ${theme.font.body1};
                    word-break:break-all;
                    white-space: pre-wrap;  
                `}
            `

            export namespace Link {
                export const Container = styled.div`
                    display: grid;
                    gap: 10px;
                `

                export const Item = styled.a`
                    ${({ theme }) => `
                        ${theme.font.body1};
                        word-break:break-all;
                        white-space: pre-wrap;
                        text-decoration: none;
                        color: ${theme.color.blue};

                        :hover {
                            text-decoration: underline;
                        }
                    `}
                `
            }
        }
    }
}
