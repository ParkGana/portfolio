import styled from 'styled-components'

export namespace MainStyle {
    export const Container = styled.div`
        ${({ theme }) => `
            height: 100vh;
            display: grid;
            justify-items: center;
            align-items: center;
            background-color: ${theme.color.white};
        `}
    `

    export const SafetyContainer = styled.div`
        display: grid;
        justify-items: center;
        align-items: center;
        gap: 70px;
        padding: 20px;
    `

    export const Title = styled.div`
        font-size: 50px;
        font-weight: 900;
        line-height: 60px;
        text-align: center;
    `

    export namespace Explanation {
        export const Container = styled.div`
            display: grid;
            justify-items: center;
            align-items: center;
            gap: 20px;
        `

        export const Item = styled.div`
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
            text-align: center;
        `
    }
}
