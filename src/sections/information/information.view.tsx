import { Title } from '@/src/components/title/title.view'
import { InformationStyle } from './information.style'

export function Information() {
    return (
        <InformationStyle.Container id="information">
            <Title title={'INFORMATION'} />
        </InformationStyle.Container>
    )
}
