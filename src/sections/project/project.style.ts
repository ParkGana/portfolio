import styled from 'styled-components'

export namespace ProjectStyle {
    export const Container = styled.div`
        ${({ theme }) => `
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
