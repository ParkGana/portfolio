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
        title: '프론트엔드 컴포넌트 사이트',
        period: '2024.08 ~ (개인 프로젝트)',
        explanation: [
            '프론트엔드 개발을 할 때 자주 구현하는 요소들을 정리해놓은 사이트입니다. 자주 사용함에도 불구하고 세세한 구현 방법이 기억나지 않아 검색을 하는 경우가 많았어서 시간적인 여유가 될 때 정리해 놓자는 생각으로 구현하게 되었습니다.',
            '(컴포넌트는 틈틈이 추가 구현할 예정입니다.)'
        ],
        information: [
            {
                field: '사용 기술',
                value: 'JavaScript / TypeScript / React Vite'
            },
            {
                field: 'Github',
                value: [
                    'https://github.com/ParkGana/component-javascript',
                    'https://github.com/ParkGana/component-react-vite'
                ]
            }
        ],
        screenshot: [
            '/images/project/component-element.png',
            '/images/project/component-animation.png',
            '/images/project/component-chart.png'
        ]
    },
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
            // {
            //     field: '게임 종류',
            //     value: '그림 퍼즐, 대칭 그림 만들기, 스네이크, 오목, 인물 및 캐릭터 맟주기, 지뢰찾기, 테트리스, 2048'
            // },
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
            // {
            //     field: '주요 내용',
            //     value: '인적 사항, 기술 스택, 프로젝트 경험, 경력 사항'
            // },
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
        screenshot: ['/images/project/portfolio-1.png']
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
            // {
            //     field: '주요 기능',
            //     value: '회원가입 및 로그인, 캠핑장 관리, 장단점 카테고리 관리'
            // },
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
    },
    {
        type: 'app',
        title: 'TODO 앱',
        period: '2023.11 (인터넷 강의 수강)',
        explanation: [
            'TODO 목록을 관리할 수 있는 앱입니다. React Native에 대한 기초를 다지기 위해 수강한 인터넷 강의 결과물입니다.',
            '웹 개발자로서의 커리어를 시작했지만 앱 개발이 메인이 되는 회사에 근무를 하면서 자연스럽게 앱 개발에도 관심을 가지게 되었습니다. 그러던 중, React를 기반으로 한 React Native라는 기술로 앱 개발을 할 수 있다는 것을 알게 되었고 개발자로서의 스펙트럼을 넓힐 수 있는 계기가 될 것이라는 생각이 들어 공부하게 되었습니다.'
        ],
        information: [
            // {
            //     field: '주요 기능',
            //     value: '회원가입 및 로그인, TODO 관리'
            // },
            {
                field: '사용 기술',
                value: 'TypeScript / React Native / Firebase'
            },
            {
                field: 'Github',
                value: 'https://github.com/ParkGana/lecture-react-native-todo-app'
            }
        ],
        screenshot: ['/images/project/todo-1.png']
    },
    {
        type: 'web',
        title: 'Youtube 사이트',
        period: '2022.03 (인터넷 강의 수강)',
        explanation: [
            '가장 대중적인 영상 플랫폼 중 하나인 Youtube를 비슷하게 구현한 사이트입니다. React에 대한 기초를 다지기 위해 수강한 인터넷 강의 결과물입니다.',
            '단순히 개발자가 아니라 전문 프론트엔드 개발자로서의 정체성을 확립하고 싶다는 생각이 들었고, 저에게 있어서 JavaScript가 가장 익숙하고 편한 언어였기 때문에 이를 기반으로 한 React라는 기술에 자연스럽게 관심을 가지게 되어 공부하게 되었습니다.'
        ],
        information: [
            // {
            //     field: '주요 기능',
            //     value: '회원가입 및 로그인, 영상 업로드, 구독, 좋아요 및 싫어요, 댓글 작성, 프로필 편집'
            // },
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
            '/images/project/youtube-1.png',
            '/images/project/youtube-2.png',
            '/images/project/youtube-3.png',
            '/images/project/youtube-4.png',
            '/images/project/youtube-5.png'
        ]
    }
]
