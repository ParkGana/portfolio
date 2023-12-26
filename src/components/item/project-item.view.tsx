import { ProjectDataType } from '@/src/sections/project/project.data'
import { ProjectItemStyle } from './project-item.style'
import { useProjectItem } from './project-item.hook'

export function ProjectItem({ data, isApp }: { data: ProjectDataType; isApp: boolean }) {
    const { datas } = useProjectItem(data.screenshot.length)

    return (
        <ProjectItemStyle.Container>
            <ProjectItemStyle.Title>{data.title}</ProjectItemStyle.Title>
            <ProjectItemStyle.Period>{data.period}</ProjectItemStyle.Period>
            <ProjectItemStyle.SafetyContainer isApp={isApp}>
                <ProjectItemStyle.Thumbnail src={data.screenshot[datas.page - 1]} isApp={isApp} />
                <ProjectItemStyle.Contents.Container>
                    <ProjectItemStyle.Contents.Feeling.Container>
                        <ProjectItemStyle.Contents.Feeling.Text>
                            {data.explanation}
                        </ProjectItemStyle.Contents.Feeling.Text>
                        <ProjectItemStyle.Contents.Feeling.Text>{data.feeling}</ProjectItemStyle.Contents.Feeling.Text>
                    </ProjectItemStyle.Contents.Feeling.Container>
                    <ProjectItemStyle.Contents.Information.Container>
                        {data.information.map((information, index) => (
                            <ProjectItemStyle.Contents.Information.SafetyContainer key={index}>
                                <ProjectItemStyle.Contents.Information.Field>
                                    {information.field}
                                </ProjectItemStyle.Contents.Information.Field>
                                {information.field === 'URL' || information.field === 'Github' ? (
                                    <ProjectItemStyle.Contents.Information.Link.Container>
                                        <ProjectItemStyle.Contents.Information.Link.Item
                                            href={
                                                typeof information.value === 'object'
                                                    ? information.value[0]
                                                    : information.value
                                            }
                                            target="_blank"
                                        >
                                            {typeof information.value === 'object'
                                                ? information.value[0]
                                                : information.value}
                                        </ProjectItemStyle.Contents.Information.Link.Item>
                                        {typeof information.value === 'object' && (
                                            <ProjectItemStyle.Contents.Information.Link.Item
                                                href={information.value[1]}
                                                target="_blank"
                                            >
                                                {information.value[1]}
                                            </ProjectItemStyle.Contents.Information.Link.Item>
                                        )}
                                    </ProjectItemStyle.Contents.Information.Link.Container>
                                ) : (
                                    <ProjectItemStyle.Contents.Information.Value>
                                        {information.value}
                                    </ProjectItemStyle.Contents.Information.Value>
                                )}
                            </ProjectItemStyle.Contents.Information.SafetyContainer>
                        ))}
                    </ProjectItemStyle.Contents.Information.Container>
                </ProjectItemStyle.Contents.Container>
            </ProjectItemStyle.SafetyContainer>
        </ProjectItemStyle.Container>
    )
}
