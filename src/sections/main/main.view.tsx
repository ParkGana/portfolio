import { MainStyle } from './main.style'

export function Main() {
    return (
        <MainStyle.Container>
            <MainStyle.SafetyContainer>
                <MainStyle.Title>
                    프론트엔드 개발자
                    <br />
                    박가나
                </MainStyle.Title>
                <MainStyle.Explanation.Container>
                    <MainStyle.Explanation.Item>
                        끊임없이 생각하고 공부하는 개발자 박가나입니다.
                    </MainStyle.Explanation.Item>
                    <MainStyle.Explanation.Item>
                        스스로를 과대평가하거나 자만하지 않고 새로운 언어나 기술을 배우는 것을 두려워하지 않습니다.
                    </MainStyle.Explanation.Item>
                    <MainStyle.Explanation.Item>
                        한 사람으로서의 몫을 해내기 위해 묵묵히 최선을 다합니다.
                    </MainStyle.Explanation.Item>
                </MainStyle.Explanation.Container>
            </MainStyle.SafetyContainer>
        </MainStyle.Container>
    )
}
