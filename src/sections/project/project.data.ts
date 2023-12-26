export interface ProjectDataType {
    type: string
    title: string
    period: string
    explanation: string
    feeling: string
    information: {
        field: string
        value: string | string[]
    }[]
    screenshot: string[]
}

export const ProjectData: ProjectDataType[] = [
    {
        type: 'web',
        title: '포트폴리오 사이트',
        period: '2023.12 (개인 프로젝트)',
        explanation: 'explanation',
        feeling: 'feeling',
        information: [
            {
                field: '주요 내용',
                value: '인적 사항, 기술 스택, 프로젝트 경험, 경력 사항'
            },
            {
                field: '사용 기술',
                value: 'TypeScript / React / Next.js'
            },
            {
                field: 'URL',
                value: ''
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/portfolio'
            }
        ],
        screenshot: ['/images/portfolio-1.png']
    },
    {
        type: 'app',
        title: '캠핑장 정보 관리 앱',
        period: '2023.12 (개인 프로젝트)',
        explanation: 'explanation',
        feeling: 'feeling',
        information: [
            {
                field: '주요 기능',
                value: '회원가입 및 로그인, 캠핑장 관리, 장단점 카테고리 관리'
            },
            {
                field: '사용 기술',
                value: 'TypeScript / React Native / AWS RDS / Firebase'
            },
            {
                field: '데이터베이스',
                value: 'PostgreSQL'
            },
            {
                field: 'Github',
                value: [
                    'https://github.com/ParkGana/camping-review-app',
                    'https://github.com/ParkGana/camping-review-backend'
                ]
            }
        ],
        screenshot: [
            '/images/camping-1.png',
            '/images/camping-2.png',
            '/images/camping-3.png',
            '/images/camping-4.png',
            '/images/camping-5.png'
        ]
    },
    {
        type: 'app',
        title: 'TODO 앱',
        period: '2023.11 (인터넷 강의 수강)',
        explanation: 'explanation',
        feeling: 'feeling',
        information: [
            {
                field: '주요 기능',
                value: '회원가입 및 로그인, TODO 관리'
            },
            {
                field: '사용 기술',
                value: 'TypeScript / React Native / Firebase'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/lecture-react-native-todo-app'
            }
        ],
        screenshot: ['/images/todo-1.png']
    },
    {
        type: 'web',
        title: 'Youtube 사이트',
        period: '2022.03 (인터넷 강의 수강)',
        explanation: 'explanation',
        feeling: 'feeling',
        information: [
            {
                field: '주요 기능',
                value: '회원가입 및 로그인, 영상 업로드, 구독, 좋아요 및 싫어요, 댓글 작성, 프로필 편집'
            },
            {
                field: '사용 기술',
                value: 'JavaScript / React / Node.js'
            },
            {
                field: '데이터베이스',
                value: 'MongoDB'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/lecture-react-youtube-web'
            }
        ],
        screenshot: [
            '/images/youtube-1.png',
            '/images/youtube-2.png',
            '/images/youtube-3.png',
            '/images/youtube-4.png',
            '/images/youtube-5.png'
        ]
    }
]
