import { Title } from '@/src/components/title/title.view'
import { SkillStyle } from './skill.style'
import { SkillItem } from '@/src/components/item/skill-item.view'

export function Skill() {
    return (
        <SkillStyle.Container id="skill">
            <Title title={'SKILL'} light />
            <SkillStyle.SafetyContainer>
                <SkillStyle.GridContainer>
                    <SkillItem title={'Web'} items={['javascript', 'typescript', 'react', 'nextjs']} />
                    <SkillItem title={'App'} items={['pwa']} />
                    <SkillItem title={'Style'} items={['styledcomponents', 'tailwindcss']} />
                </SkillStyle.GridContainer>
                <SkillStyle.GridContainer>
                    <SkillItem title={'State'} items={['redux', 'zustand', 'reactquery']} />
                    <SkillItem title={'Database'} items={['postgresql', 'supabase']} />
                    <SkillItem title={'Server'} items={['vercel']} />
                </SkillStyle.GridContainer>
                <SkillStyle.GridContainer last>
                    <SkillItem title={'Tool'} items={['git', 'github', 'figma']} />
                    <SkillItem title={'Certification'} items={['qnet']} />
                </SkillStyle.GridContainer>
            </SkillStyle.SafetyContainer>
        </SkillStyle.Container>
    )
}
