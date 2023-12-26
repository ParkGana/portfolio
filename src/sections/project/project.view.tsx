import { Title } from '@/src/components/title/title.view'
import { ProjectStyle } from './project.style'
import { ProjectItem } from '@/src/components/item/project-item.view'
import { ProjectData } from './project.data'

export function Project() {
    return (
        <ProjectStyle.Container id="project">
            <Title title={'PROJECT'} light />
            <ProjectStyle.SafetyContainer>
                {ProjectData.map((project, index) => (
                    <ProjectItem key={index} data={project} isApp={project.type === 'app'} />
                ))}
            </ProjectStyle.SafetyContainer>
        </ProjectStyle.Container>
    )
}
