# eslint-config-codestates [![CI][ci-image]][ci-url]

[ci-image]: https://github.com/CodeStates-Engineering/eslint-config-codestates/actions/workflows/ci.yaml/badge.svg?branch=main
[ci-url]: https://github.com/CodeStates-Engineering/eslint-config-codestates/actions/workflows/ci.yaml

CodeStates에서 작성하는 공통 린트 규칙 모음입니다.

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

## 설치

### .npmrc

1. 프로젝트 루트에 `.npmrc` 파일을 생성합니다.
2. 생성한 파일에 아래와 같이 입력합니다.

```bash
//npm.pkg.github.com/:_authToken=${CSE_NPM_TOKEN}
@codestates-engineering:registry=https://npm.pkg.github.com/
```

3. 각 패키지 매니저를 통해 설치합니다.

### npm

```bash
npm install --save-dev @codestates-engineering/eslint-config-codestates
```

### yarn

```bash
yarn add -D @codestates-engineering/eslint-config-codestates
```

## 사용 방법

### ESLint

1. 사용하는 프로젝트의 `package.json` scripts 속성에 아래 명령어를 추가합니다.

```json
{
  "lint": "eslint './**/*.{js,ts,tsx}'",
  "lint:fix": "npm run lint -- --fix"
}
```

2. 프로젝트 루트에 `.eslintrc` 파일을 만들고 추가한 린트 의존성을 작성합니다.

```json
{
  "extends": [
    "@codestates-engineering/eslint-config-codestates"
    // 확장할 규칙 작성
  ],
  "rules": {
    // 추가할 규칙 작성
  }
}
```

#### frontend

React 기반의 **프론트엔드 프로젝트**라면 아래와 같이 `.eslintrc` 파일을 작성합니다.

```json
{
  "extends": ["@codestates-engineering/eslint-config-codestates/frontend"]
}
```

### Prettier

1. 사용하는 프로젝트의 `package.json` scripts 속성에 아래 명령어를 추가합니다.

```json
{
  "prettier": "prettier '**/*.{json,yaml,md}' --check",
  "prettier:fix": "prettier '**/*.{json,yaml,md}' --write"
}
```

2. 프로젝트 루트에 `.prettierrc` 파일을 만들고 추가한 의존성을 작성합니다.

```json
"@codestates-engineering/eslint-config-codestates/prettierrc"
```

## Versioning

[Semantic Versioning](https://semver.org/)을 사용합니다.

> 1. `MAJOR` 이전 버전과 호환되지 않은 방식으로 수정될 경우
> 2. `MINOR` 이전 버전과 호환되는 방식으로 기능을 추가하는 경우
> 3. `PATCH` 이전 버전과 호환되는 방식으로 버그를 수정할 경우

## CI/CD

Github Actions를 통해 CI/CD를 관리합니다.

- 정식 **Release**와 테스트를 위한 **Canary**가 있습니다.
- `feature/**` 브랜치를 push 하면 자동으로 **Canary** 배포를 진행합니다.
- `feature/**` 브랜치에서 Commit Message 작성시 `skip canary` 문장을 포함시키면 **Canary** 배포를 생략합니다.
- `main` 브랜치에 push하면 자동으로 정식 버전이 배포됩니다.

## Git Workflow

[Git-flow](https://techblog.woowahan.com/2553/)를 기반으로 작업합니다.

### Branch

- main: 배포까지 마무리가 된 최종 코드가 있는 브랜치
- develop: main을 기준으로 최신화된 다음 버전을 개발할 브랜치
- feature: 기능 개발 브랜치
- release/\*\*: 기능 개발을 완료하고 배포할 브랜치

#### develop

1. 최신화된 `develop` 브랜치를 기준으로 `feature/**` 브랜치를 생성합니다.
2. 기능 개발 및 개발에 대한 **CHANGELOG**를 작성합니다.
3. 개발이 완료된 `feature` 브랜치를 **push**합니다.
4. **target branch**를 `develop` 브랜치로 설정하고 PR을 요청합니다.
   - 이 때 개발한 기능에 대해서 자동으로 **Canary** 배포가 실행됩니다.
   - 만약, Canary 배포가 필요하지 않다면 커밋 메시지에 `skip canary`를 포함시킵니다.
   - 이 때 Canary 배포의 횟수는 몇 번이든 상관 없습니다.
5. 배포된 Canary 버전을 통해 테스트를 진행 후 문제가 없고 리뷰가 완료되었다면 `develop` 브랜치에 병합합니다.
6. Local `develop` 브랜치를 최신화합니다.

#### release/\*\*

1. 기능 개발이 완료된 `develop` 브랜치가 최신화 되었는지 확인합니다.
2. `develop`브랜치에서 배포할 버전의 `release/v${배포할_버전}` 브랜치를 생성합니다.
3. 배포할 버전에 맞게 버전을 생성합니다.
   - `MAJOR` npm version major
   - `MINOR` npm version minor
   - `PATCH` npm version patch
4. PR을 요청하고 **target branch**를 `main` 브랜치로 설정합니다.
5. CI가 진행되고 이상이 없다면 `main` 브랜치에 병합합니다.
6. 병합시 자동으로 CD가 진행됩니다.
7. CD 진행 이후 자동으로 Release Tag가 생성되며 생성된 Tag에 배포된 버전의 변경사항을 작성합니다.
8. CD 이후 `develop` 브랜치를 최신화합니다.
