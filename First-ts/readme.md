# 1.TypeScirpt 파일 Javavsrcipt로 변환하기
- 브라우저는 자바스크립트밖에 해석하지 못한다

1. vsc 터미널 열고 tsc 파일이름.ts
1. 새로 생성된 js 파일 확인

# 2.tsconfig 파일 생성
- typescript와 vsc간의 오류를 잡기 위한 설정파일 생성
1. vsc 터미널 열고 tsc --init
2. 새로 생성된 tsconfig.json 파일 확인

# 3.자동 업데이트
- 매 번 업데이트하기 힘들기 때문에 자동 업데이트 기능 실행
1. vsc 터미널 열고 tsc -w
2. vsc 터미널에 [오후 12:22:04] Starting compilation in watch mode...
[오후 12:22:05] Found 0 errors. Watching for file changes. 내용확인
1. 파일 내용 바꿔보면서 제대로 동작되는지 확인
