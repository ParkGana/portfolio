import { Title } from '@/src/components/title/title.view'
import { ProjectStyle } from './project.style'

export function Project() {
    return (
        <ProjectStyle.Container id="project">
            <Title title={'PROJECT'} light />
        </ProjectStyle.Container>
    )
}
