import { useEffect, useState } from 'react'

export function useHeader() {
    const [isTop, setIsTop] = useState<boolean>(true)

    useEffect(() => {
        const header = document.getElementById('header')

        if (header) {
            const headerHeight = header.getBoundingClientRect().height

            window.addEventListener('scroll', () => {
                setIsTop(window.scrollY < headerHeight)
            })
        }
    }, [])

    return {
        states: {
            isTop
        }
    }
}
