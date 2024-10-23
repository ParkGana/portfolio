export interface ProjectDataType {
    type: string
    title: string
    period: string
    explanation: string[]
    information: {
        field: string
        value: string | string[]
    }[]
    screenshot: string[]
}

export const ProjectData: ProjectDataType[] = [
    {
        type: 'web',
        title: '미니 게임 사이트',
        period: '2024.02 ~ (개인 프로젝트)',
        explanation: [
            '간단한 미니 게임들을 할 수 있는 사이트입니다. `마인드허브` 재직 당시 주요 제품이 미니 게임 형태의 컨텐츠가 모여 있는 프로그램이었는데 태블릿 기반이었다 보니 앱 개발자들이 개발을 담당하였고, 웹 형태로 만들어보고 싶다는 생각을 자주 하다가 이번 기회에 실행에 옮기게 되었습니다.',
            '지금까지의 개발은 대부분 정적인 형태의 사이트였는데 이번 프로젝트에서는 게임이라는 컨텐츠의 특성상 동적인 형태의 기능을 하는 코딩을 해보는 경험을 할 수 있었습니다.',
            '그동안은 단순히 각각의 컴포넌트에서 useState를 사용하여 상태 관리를 하다가 처음으로 Redux를 사용해 봄으로써 보다 편리하게 상태 관리를 할 수 있었습니다.',
            '(게임 컨텐츠는 틈틈이 추가 구현할 예정입니다.)'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'TypeScript / React / Next.js / Redux'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/game-web'
            }
        ],
        screenshot: [
            '/images/project/game-guess-character.png',
            '/images/project/game-guess-people.png',
            '/images/project/game-minesweeper.png',
            '/images/project/game-omok.png',
            '/images/project/game-puzzle.png',
            '/images/project/game-snake.png',
            '/images/project/game-symmetry.png',
            '/images/project/game-tetris.png',
            '/images/project/game-threes.png'
        ]
    },
    {
        type: 'web',
        title: '포트폴리오 사이트',
        period: '2023.12 (개인 프로젝트)',
        explanation: [
            '현재 보고 계시는 포트폴리오 사이트입니다. 개발자로서의 커리어를 쌓아가는 사람으로써 단순 PDF 파일이 아닌 하나의 사이트로 포트폴리오를 만들어보자는 생각으로 개발하게 되었습니다.',
            '처음부터 끝까지 스스로 디자인을 하고 반응형 화면으로 구현해 봄으로써 퍼블리싱 능력을 향상시킬 수 있었습니다.',
            '비록 프론트엔드 부분만 있는 간단한 프로그램이지만 AWS EC2 서버에 배포해보는 경험을 통해 처음으로 개인 로컬에서만 실행되는 것이 아닌 누구나 접속할 수 있는 사이트를 만들 수 있었습니다.'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'TypeScript / React / Next.js / AWS EC2'
            },
            {
                field: 'URL',
                value: 'http://portfolio.dev-gana.com'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/portfolio'
            }
        ],
        screenshot: ['/images/project/portfolio.png']
    },
    {
        type: 'app',
        title: '캠핑장 정보 관리 앱',
        period: '2023.12 (개인 프로젝트)',
        explanation: [
            '캠핑장 정보를 관리할 수 있는 앱입니다. 평소 캠핑 다니는 것을 좋아해서 그동안 방문한, 그리고 앞으로 방문할 캠핑장의 정보와 장단점을 한 눈에 관리하고 싶다는 생각으로 개발하게 되었습니다.',
            '회원가입 및 로그인 기능 구현에 Firebase를 활용함으로써 NoSQL을 경험할 수 있었습니다.',
            '프론트엔드와 백엔드를 하나의 프로젝트가 아닌 별도로 분리된 프로젝트로 구현하고 RESTful API로 통신해 보았습니다. 또한 데이터베이스를 직접 설계하고 TypeORM을 사용하여 데이터 CRUD를 구현해 보았습니다. 이러한 경험을 통해 추후 풀스텍 개발자로 발전할 수 있는 역량을 갖출 수 있었습니다.'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'TypeScript / React Native / Node.js / Nest.js / AWS RDS / Firebase'
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
            '/images/project/camping-1.png',
            '/images/project/camping-2.png',
            '/images/project/camping-3.png',
            '/images/project/camping-4.png',
            '/images/project/camping-5.png'
        ]
    }
]
