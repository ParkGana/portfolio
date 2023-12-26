import { useEffect, useState } from 'react'

export function useProjectItem(length: number) {
    const [page, setPage] = useState<number>(1)

    // 2초마다 이미지 파일 변경
    useEffect(() => {
        setTimeout(() => {
            setPage(page === length ? 1 : page + 1)
        }, 2000)
    }, [length, page])

    return {
        datas: {
            page
        }
    }
}
