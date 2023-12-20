import styled from 'styled-components'

export namespace SkillStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            padding: 20px;
            background-color: ${theme.color.section.dark};

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
