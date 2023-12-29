import { Title } from '@/src/components/title/title.view'
import { SkillStyle } from './skill.style'
import { SkillItem } from '@/src/components/item/skill-item.view'

export function Skill() {
    return (
        <SkillStyle.Container id="skill">
            <Title title={'SKILL'} light />
            <SkillStyle.SafetyContainer>
                <SkillStyle.GridContainer>
                    <SkillItem title={'Language'} items={['javascript', 'typescript', 'html', 'css']} />
                    <SkillItem title={'Frontend'} items={['react', 'nextjs']} />
                    <SkillItem title={'Mobile App'} items={['react-native']} />
                </SkillStyle.GridContainer>
                <SkillStyle.GridContainer>
                    <SkillItem title={'Backend'} items={['nodejs', 'nestjs']} />
                    <SkillItem title={'Server'} items={['aws-ec2']} />
                    <SkillItem title={'Database'} items={['mysql', 'mongodb', 'postgresql', 'firebase']} />
                </SkillStyle.GridContainer>
                <SkillStyle.GridContainer last>
                    <SkillItem title={'Tool'} items={['git', 'github', 'figma']} />
                    <SkillItem title={'Certification'} items={['qnet']} />
                </SkillStyle.GridContainer>
            </SkillStyle.SafetyContainer>
        </SkillStyle.Container>
    )
}
