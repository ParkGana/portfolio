import styled from 'styled-components'

export namespace ProjectStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            height: 500px;
            padding: 20px;
            background-color: ${theme.color.section.purple};

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
