export interface CareerDataType {
    company: {
        logo: string
        name: string
        period: string
        explanation: string
        role: string
    }
    skill: string
    work: {
        title: string
        explanation?: string
        detail: string[]
    }[]
}

export const CareerData: CareerDataType[] = [
    {
        company: {
            logo: '/logos/mindhub.png',
            name: '마인드허브',
            period: '2022.05 ~ 2023.05 (1년 1개월)',
            explanation:
                '뇌졸중, 치매 등의 질병으로 인해 언어 및 인지 기능에 장애가 생긴 사람들을 대상으로 하는 재활 프로그램인 Zenicog를 개발하는 회사입니다.',
            role: 'TypeScript와 React 기반의 웹 프론트 개발을 메인으로 담당하였고, 기존 API 보완 및 신규 API 생성 등 백엔드 개발을 보조하였습니다. 또한 Zenicog 컨텐츠와 관련된 데이터 및 리소스 파일에 대한 관리도 담당하였습니다.'
        },
        skill: 'JavaScript, TypeScript, HTML5, CSS3, React, Next.js, Node.js, Nest.js, PostgreSQL, Figma',
        work: [
            {
                title: '회사 홈페이지 개편',
                detail: [
                    'JavaScript로 구현된 코드를 TypeScript로 변환'
                    // '반응형 화면 구현',
                    // '변경된 요구사항에 따라 화면 재구성'
                ]
            },
            {
                title: 'Zenicog 백오피스 개발 및 유지보수',
                explanation:
                    'Zenicog를 사용하는 훈련 대상자(환자)를 관리하는 기관 및 치료사들이 사용하는 관리자 페이지',
                detail: [
                    '소속 치료사 관리 기능 개발',
                    '훈련 대상자 관리 기능 개발',
                    '훈련 결과 조회 기능 개발',
                    '관제센터에서 발급한 요금 청구서 조회 기능 개발',
                    '서비스 이용에 대한 문의 작성 기능 개발',
                    'Chart.js 라이브러리를 사용하여 훈련 데이터를 그래프, 표 등의 시각적 형태로 구현',
                    'jspdf, html2canvas 라이브러리를 사용하여 훈련 데이터를 레포트 형태의 PDF 파일로 다운로드 가능하도록 구현'
                ]
            },
            {
                title: 'Zenicog 관제센터 개발 및 유지보수',
                explanation: '마인드허브 내부의 영업 담당자가 사용하는 슈퍼 관리자 페이지',
                detail: [
                    '기관 관리 기능 개발',
                    '제품과 함께 제공되는 하드웨어(태블릿PC) 관리 기능 개발',
                    '요금 청구 기능 개발',
                    '브랜드 사이트에서 요청된 데모 신청 처리 기능 개발',
                    '백오피스에서 작성된 문의 관리 기능 개발',
                    '제품 사용 시 동의 필요한 이용 약관 관리 기능 개발',
                    'jspdf, html2canvas 라이브러리를 사용하여 요금 청구서를 PDF 파일로 다운로드 가능하도록 구현'
                ]
            },
            {
                title: 'Zenicog 브랜드 사이트 개발 및 유지보수',
                explanation: 'Zenicog에 대한 전반적인 소개를 하는 사이트',
                detail: [
                    '제품 소개가 주 목적이므로 특별한 기능보다는 퍼블리싱 위주의 코드로 구성',
                    '데모 체험을 위한 신청 양식 제공'
                ]
            },
            {
                title: 'Zenicog 백엔드 개발 보조',
                detail: ['기존 API 수정 및 신규 API 생성', '컨텐츠 관련 리소스 파일 및 데이터 관리']
            }
        ]
    },
    {
        company: {
            logo: '/logos/founder.png',
            name: '파운더',
            period: '2021.04 ~ 2021.10 (7개월)',
            explanation:
                '사용자가 입력한 내용을 영상 형태의 명함으로 제작해주는 프로그램인 Salespoolin을 개발하는 회사입니다.',
            role: 'JavaScript와 Node.js 기반의 웹 프론트 개발부터, 데이터베이스 설계 및 API 생성 등 백엔드 개발까지 풀스텍 개발자로서의 역할을 담당하였습니다.'
        },
        skill: 'JavaScript, HTML5, CSS3, Node.js, MySQL, AWS EC2',
        work: [
            {
                title: 'Salespoolin 개발 및 유지보수',
                detail: [
                    '회사 및 부서, 직원 관리 기능 개발',
                    '영상 명함 템플릿 선택 및 미리보기 기능 개발',
                    '사용자가 입력한 내용이 적용된 영상 명함 제작 기능 개발',
                    '영상 명함을 웹에서 볼 수 있는 링크 제공 기능 개발',
                    '영상 명함에 문서 파일(회사 소개서, 계약서 등) 연동 기능 개발',
                    '배치 파일을 사용하여 After Effect 및 ffmpeg를 실행 함으로써 자동으로 영상이 생성되도록 구현',
                    '백엔드 서버와의 실시간 통신을 통해 사용자가 영상 제작 진행률을 볼 수 있도록 구현'
                ]
            },
            {
                title: 'Salespoolin 데이터베이스 및 서버 구축',
                detail: ['데이터베이스 설계', 'AWS EC2 인스턴스에 서버 구축', 'PM2를 이용하여 무중단 서비스 구현']
            }
        ]
    }
]
