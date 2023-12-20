import styled from 'styled-components'

export namespace HeaderStyle {
    export const Container = styled.div<{ isTop: boolean }>`
        ${({ theme, isTop }) => `
            height: 70px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            display:grid;
            justify-items: center;
            align-items: stretch;
            background-color: ${theme.color.white};

            ${!isTop && `box-shadow: 0 10px 10px -10px ${theme.color.gray}`};
        `}
    `

    export const SafetyContainer = styled.div`
        ${({ theme }) => `
            width: 100%;
            max-width: 1200px;
            display: grid;
            grid-template-columns: repeat(2, auto);
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: `
                    position: relative;
                `
            })}
        `}
    `

    export const Logo = styled.div`
        ${({ theme }) => `
            ${theme.font.headline2};
            cursor: pointer;
        `}
    `

    export namespace Menu {
        export const Container = styled.div<{ isOpen: boolean }>`
            ${({ theme, isOpen }) => `
                ${theme.font.title3};
                
                ${theme.ratio.size({
                    large: `
                        display: grid;
                        grid-template-columns: repeat(4, auto);
                        gap: 30px;
                    `,
                    medium: `
                        display: grid;
                        grid-template-columns: repeat(4, auto);
                        gap: 30px;
                        `,
                    small: `
                        position:absolute;
                        top: 70px;
                        left: 0;
                        right: 0;
                        display: ${isOpen ? 'block' : 'none'};
                        box-shadow: 0 10px 10px -10px ${theme.color.gray};
                    `
                })}
            `}
        `

        export const Item = styled.div`
            ${({ theme }) => `
                cursor: pointer;

                ${theme.ratio.size({
                    large: ``,
                    medium: ``,
                    small: `
                        padding: 20px;
                        background-color: ${theme.color.white};
                    `
                })}
            `}
        `

        export const Icon = styled.img`
            ${({ theme }) => `
                cursor: pointer;

                ${theme.ratio.size({
                    large: `
                        display: none;
                    `,
                    medium: `
                        display: none;
                    `,
                    small: `
                        display: block;
                    `
                })}
            `}
        `
    }
}
