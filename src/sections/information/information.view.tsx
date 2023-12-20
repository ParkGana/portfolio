import { Title } from '@/src/components/title/title.view'
import { InformationStyle } from './information.style'
import { InformationItem } from '@/src/components/item/information-item.view'

export function Information() {
    return (
        <InformationStyle.Container id="information">
            <Title title={'INFORMATION'} />
            <InformationStyle.SafetyContainer>
                <InformationItem icon={'/icons/user.png'} title={'이름'} description={'박가나'} />
                <InformationItem icon={'/icons/calendar.png'} title={'생년월일'} description={'1997.09.13'} />
                <InformationItem icon={'/icons/major.png'} title={'전공'} description={'의공학IT융합전공'} />
                <InformationItem icon={'/icons/location.png'} title={'거주지'} description={'경기도 안산시 상록구'} />
                <InformationItem icon={'/icons/phone.png'} title={'전화번호'} description={'010-6577-6849'} />
                <InformationItem icon={'/icons/mail.png'} title={'이메일'} description={'gnchoco97@gmail.com'} />
            </InformationStyle.SafetyContainer>
        </InformationStyle.Container>
    )
}
