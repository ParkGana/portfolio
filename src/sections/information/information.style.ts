import styled from 'styled-components'

export namespace InformationStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            padding: 20px;
            background-color: ${theme.color.section.light};

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
