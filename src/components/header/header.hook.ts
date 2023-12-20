import { useEffect, useState } from 'react'

export function useHeader() {
    const [isTop, setIsTop] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    /* 화면 최상단에 위치하는지 확인 */
    useEffect(() => {
        const header = document.getElementById('header')

        if (header) {
            const headerHeight = header.getBoundingClientRect().height

            window.addEventListener('scroll', () => {
                setIsTop(window.scrollY < headerHeight)
            })
        }
    }, [])

    /* 화면 크기 변경 시 메뉴 탭 닫기 */
    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsOpen(false)
        })
    }, [])

    /* 메뉴 탭 열고 닫기 */
    const onToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    /* 메뉴 클릭 시 해당 위치로 이동 */
    const onClickMenu = (section: string) => {
        const informationSection = document.getElementById('information')
        const skillSection = document.getElementById('skill')
        const projectSection = document.getElementById('project')
        const careerSection = document.getElementById('career')

        setIsOpen(false)

        if (informationSection && section === 'information') {
            window.scrollTo({ top: informationSection.offsetTop - 70, behavior: 'smooth' })
        } else if (skillSection && section === 'skill') {
            window.scrollTo({ top: skillSection.offsetTop - 70, behavior: 'smooth' })
        } else if (projectSection && section === 'project') {
            window.scrollTo({ top: projectSection.offsetTop - 70, behavior: 'smooth' })
        } else if (careerSection && section === 'career') {
            window.scrollTo({ top: careerSection.offsetTop - 70, behavior: 'smooth' })
        }
    }

    /* 화면 최상단으로 이동 */
    const onMoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
        states: {
            isTop,
            isOpen
        },
        events: {
            onToggleMenu,
            onClickMenu,
            onMoveToTop
        }
    }
}
