# 기본 요청 사항
- [x] 상단 네비게이션 바, 푸터는 랜딩페이지와 동일한 스타일, 규칙으로 만들어 주세요.
- [x] 카드 컴포넌트를 클릭하면 해당하는 링크로 새로운 창을 띄워서 이동하게 해주세요.
- [ ] 카드 컴포넌트에서 createdAt 데이터 기준으로 현재 Date와 차이에 따라 아래와 같은 규칙으로 설정해 주세요.
  - [ ]  2분 미만은 “1 minute ago”
  - [ ]  59분 이하는 “OO minutes ago”
  - [ ]  60분 이상은 “1 hour ago”
  - [ ]  23시간 이하는 “OO hours ago”
  - [ ]  24시간 이상은 “1 day ago”
  - [ ]  30일 이하는 “OO days ago”
  - [ ]  31일 이상은 “1 month ago”
  - [ ]  11달 이하는 “OO months ago”
  - [ ]  12달 이상은 “1 year ago”
  - [ ]  OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”
- [x] 프로필 영역의 데이터는 https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sample/user”를 활용해 주세요.
- [x] 프로필 데이터가 없는 경우 “로그인” 버튼이 보이게 해주세요.
- [x] 폴더 소유자, 폴더 이름 영역, 링크들에 대한 데이터는 “/api/sample/folder”를 활용해 주세요.(여기서 폴더란 링크들의 정보가 저장되어 있는 객체를 의미합니다. shared 페이지는 외부 유저에게 자신의 폴더 데이터 하나를 공유할 때 유저가 보게되는 화면 입니다.@디자인 시안에서 “프로필 이미지”는 폴더 소유자의 프로필, “@코드잇”은 폴더 소유자 이름, “⭐️ 즐겨찾기”는 폴더 이름이에요.)
- [x] Tablet에서 카드 리스트가 화면의 너비 1124px를 기준으로 이상일 때는 3열로 작을 때는 2열로 배치해 주세요.
- [x] 767 이하일 때는 1열로 보이게 한다.
- [x] 검색바의 검색 기능은 추후 만듭니다.
- [x] Tablet, Mobile에서 검색바, 카드 리스트의 좌우 최소 여백은 32px로 설정해 주세요.

## 컴포넌트
- [x] Static, no image, Hover 상태만 고려해 카드 컴포넌트를 만들어 주세요. (다른 상태의 디자인, 기능은 추후 만들어요.)
- [x] Hover 상태에서 이미지가 기존 크기의 130%로 커지게 해주세요. -> 카드 전체가 커지도록 변경했습니다.

# 추가 사항
## 컴포넌트 관련
- [ ] 컴포넌트 내부에서 관리하는 자원과 외부(부모 요소)에서 관리하는 자원을 구별한다.
  - [ ] 레이아웃과 관련된 것은 컴포넌트 외부에서 관리한다.
- [ ] className을 props로 넘겨줄 지, 해당 컴포넌트를 호출하는 부모 요소에서 div로 처리할 지 분명히 구별한다.
