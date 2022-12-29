# eslint-config-codestates

## 프로젝트 구조

```
.github
├── workflows
│   └── *.yaml
├── CODEOWNERS
rules (개발자 커스텀 룰 규칙 모음)
├── typescript (타입스크립트 룰)
│   └── *.js
├── base.js (eslint 기본 룰)
├── import.js (모듈 import/export 관련 룰)
├── jsx-a11y.js (접근성 관련 룰)
├── prettier.js (prettier 관련 룰)
├── promise.js (promise 관련 룰)
├── react-hooks.js (react hooks 관련 룰)
├── react.js (react 관련 룰)
scripts (스크립트)
├── canary-publish.sh (카나리 배포 스크립트)
test (린트 테스트 모음)
└── * (각 환경별 테스트 디렉토리)
    ├── .eslintrc
    └── *.{js,ts,tsx}
frontend.js (프론트엔드 전용 린트 모듈)
index.js (린트 모듈)
prettierrc.js (프리티어 모듈)
```
