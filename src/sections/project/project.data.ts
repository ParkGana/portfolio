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
        title: '한잔해',
        period: '2025.01 ~ 2025.02 (개발자 4명 / 디자이너 2명)',
        explanation: [
            '취향에 맞는 전통주를 추천해주는 AI 큐레이션 서비스입니다. 최근 전통주에 대한 관심이 높아지고 있는 가운데, 사용자 맞춤 전통주를 추천하고 그와 어울리는 음식 페어링 정보를 제공함으로써 더 많은 사람들이 전통주의 매력을 느끼고 즐길 수 있도록 돕고자 하는 마음으로 개발하게 되었습니다.',
            '정교한 프롬프트 엔지니어링을 활용한 Open AI Assistants를 적용하여 단순 데이터 필터링이 아닌 사용자 맞춤 추천 기능을 구현할 수 있었습니다.',
            '실제 사용자가 있는 서비스라는 관점에서 개발을 진행했기 때문에 기능 구현뿐만 아니라 사용자 경험을 높이고 성능을 최적화하는 것에 많은 시간을 투자하였고, 이를 통해 실제 실무에서 요구되는 개발 및 사고 능력을 향상시킬 수 있었습니다.'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'TypeScript / Next.js / Tailwind CSS / Context API / Zustand / TanStack Query / PWA / FCM / Supabase / Open AI Assistants / Kakao Map API'
            },
            {
                field: 'URL',
                value: 'https://kbo-calendar.dev-gana.com/'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/kbo-calendar'
            }
        ],
        screenshot: [
            '/images/project/hanjanhae-home.png',
            '/images/project/hanjanhae-preference.png',
            '/images/project/hanjanhae-result.png',
            '/images/project/hanjanhae-search.png',
            '/images/project/hanjanhae-drink.png',
            '/images/project/hanjanhae-place.png'
        ]
    },
    {
        type: 'web',
        title: '야구 캘린더',
        period: '2024.11 ~ 2024.12 (개인)',
        explanation: [
            '응원하는 프로야구 팀의 일정을 기록하고 관리할 수 있는 캘린더입니다. 단순히 그 날 그 날 경기 결과를 확인하는 것을 넘어서 요즘 우리 팀이 잘하고 있는지, 어느 팀한테 강하고 어느 팀한테는 약한지 등을 한 눈에 확인하고 싶은 생각이 들어서 개발하게 되었습니다.',
            '일주일에 6일을 경기하는 프로야구의 특성상 웹보다는 앱으로 사용하는 빈도가 더 높을 것이라고 판단되었기 때문에 PWA를 활용하여 앱 형태로도 서비스 이용이 가능하도록 구현하였습니다.',
            '그동안은 기술 습득이나 기능 구현 자체에 초점을 맞추고 개발을 해왔지만 이 서비스의 경우 제가 실제로 사용할 목적으로 만들었다보니 개발자가 아닌 사용자의 입장에서 서비스를 바라보는 경험을 할 수 있었습니다.'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'JavaScript / React / Styled Components / Context API / Zustand / TanStack Query / PWA / Supabase'
            },
            {
                field: 'URL',
                value: 'https://kbo-calendar.dev-gana.com/'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/kbo-calendar'
            }
        ],
        screenshot: [
            '/images/project/kbo-calendar.png',
            '/images/project/kbo-read.png',
            '/images/project/kbo-create.png',
            '/images/project/kbo-record.png'
        ]
    },
    {
        type: 'web',
        title: '미니 게임',
        period: '2024.02 (개인)',
        explanation: [
            '간단한 미니 게임들을 할 수 있는 사이트입니다. `마인드허브` 재직 당시 주요 제품이 미니 게임 형태의 컨텐츠가 모여 있는 프로그램이었는데 태블릿 기반이었다 보니 앱 개발자들이 개발을 담당하였고, 웹 형태로 만들어보고 싶다는 생각을 자주 하다가 이번 기회에 실행에 옮기게 되었습니다.',
            '그동안은 단순히 각각의 컴포넌트에서 useState를 사용하여 상태 관리를 하다가 처음으로 Redux를 사용해 봄으로써 보다 편리하게 상태 관리를 할 수 있었습니다.',
            '지금까지의 개발은 대부분 정적인 형태의 사이트였는데 이번 프로젝트에서는 게임이라는 컨텐츠의 특성상 동적인 형태의 기능을 하는 코딩을 해보는 경험을 할 수 있었습니다.'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'TypeScript / Next.js / Styled Components / Redux'
            },
            {
                field: 'URL',
                value: 'https://mini-game.dev-gana.com'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/mini-game'
            }
        ],
        screenshot: [
            '/images/project/game-minesweeper.png',
            '/images/project/game-omok.png',
            '/images/project/game-snake.png',
            '/images/project/game-tetris.png',
            '/images/project/game-threes.png'
        ]
    },
    {
        type: 'web',
        title: '포트폴리오 사이트',
        period: '2023.12 (개인)',
        explanation: [
            '현재 보고 계시는 포트폴리오 사이트입니다. 개발자로서의 커리어를 쌓아가는 사람으로써 단순 PDF 파일이 아닌 하나의 사이트로 포트폴리오를 만들어보자는 생각으로 개발하게 되었습니다.',
            '처음부터 끝까지 스스로 디자인을 하고 반응형 화면으로 구현해 봄으로써 퍼블리싱 능력을 향상시킬 수 있었습니다.',
            '비록 프론트엔드 부분만 있는 간단한 프로그램이지만 Vercel 서버에 배포해보는 경험을 통해 처음으로 개인 로컬에서만 실행되는 것이 아닌 누구나 접속할 수 있는 사이트를 만들 수 있었습니다.'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'TypeScript / Next.js / Styled Components'
            },
            {
                field: 'URL',
                value: 'https://portfolio.dev-gana.com'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/portfolio'
            }
        ],
        screenshot: ['/images/project/portfolio.png']
    }
]
