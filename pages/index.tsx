import { Career } from '@/src/sections/career/career.view'
import { Header } from '@/src/components/header/header.view'
import { Information } from '@/src/sections/information/information.view'
import { Project } from '@/src/sections/project/project.view'
import { Skill } from '@/src/sections/skill/skill.view'
import { Main } from '@/src/sections/main/main.view'

export default function Page() {
    return (
        <>
            <Header />
            <Main />
            <Information />
            <Skill />
            <Project />
            <Career />
        </>
    )
}
