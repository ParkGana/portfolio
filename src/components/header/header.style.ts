import styled from 'styled-components'

export namespace HeaderStyle {
    export const Container = styled.div<{ isTop: boolean }>`
        ${({ theme, isTop }) => `
            height: 70px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background-color: ${theme.color.white};

            ${!isTop && `box-shadow: 1px 1px 10px 1px ${theme.color.gray}`};

            ${theme.ratio.size({
                large: ``,
                medium: ``,
                small: ``
            })}
        `}
    `
}
