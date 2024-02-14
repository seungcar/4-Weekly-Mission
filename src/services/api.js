const API_URL = 'https://bootcamp-api.codeit.kr/api/';

function createApiUrl(path) {
  const url = new URL(path, API_URL);
  return url;
}

// api/sample/user
// const user = {
//   id: 1,
//   name: "코드잇",
//   email: "codeit@codeit.com",
//   profileImageSource: "https://codeit-front.s3.ap-northeast-2.amazonaws.com/images/default_profile.png",
// };
export async function getUserInfo() {
  const url = createApiUrl('sample/use');

  const response = await fetch(url);
  const result = await response.json();
  const responseError = result.error;

  if (!response.ok) {
    throw new Error(`User response error: ${responseError}`);
  }

  return result;
}

// api/sample/folder
// const folder = {
//   folder: {
//     id: 1,
//     name: "⭐️ 즐겨찾기",
//     owner: {
//       id: 2,
//       name: "개발자",
//       profileImageSource: "https://codeit-images.codeit.com/badges/COMPLETE_100_LESSONS.png",
//     },
//     links: [
//       {
//         id: 1,
//         createdAt: "2023-03-12T14:24:08Z",
//         url: "https://www.codeit.kr",
//         title: "코드잇 | 코딩, 쉬워질 때도 됐다",
//         description: "월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!",
//         imageSource: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
//       },
//       {
//         id: 2,
//         createdAt: "2022-12-23T09:44:10Z",
//         url: "https://ko.reactjs.org/",
//         title: "React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리",
//         description: "A JavaScript library for building user interfaces",
//         imageSource: "https://reactjs.org/logo-og.png",
//       },
//       {
//         id: 3,
//         createdAt: "2023-01-12T22:27:22Z",
//         url: "https://nextjs.org",
//         title: "Next.js by Vercel - The React Framework for the Web",
//         description:
//           "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
//         imageSource: "https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png",
//       },
//       {
//         id: 4,
//         createdAt: "2023-03-21T12:51:30Z",
//         url: "https://www.typescriptlang.org/ko/docs/",
//         title: "The starting point for learning TypeScript",
//         description: "Find TypeScript starter projects: from Angular to React or Node.js and CLIs.",
//       },
//       {
//         id: 5,
//         createdAt: "2023-04-17T14:24:11Z",
//         url: "https://tanstack.com/",
//         title: "TanStack | High Quality Open-Source Software for Web Developers",
//         description:
//           "Headless, type-safe, powerful utilities for complex workflows like Data Management, Data Visualization, Charts, Tables, and UI Components.",
//         imageSource: "https://tanstack.com/build/_assets/og-FA4FELIQ.png",
//       },
//       {
//         id: 6,
//         createdAt: "2022-11-12T03:24:15Z",
//         url: "https://storybook.js.org",
//         title: "Storybook: Frontend workshop for UI development",
//         description:
//           "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.",
//         imageSource: "https://storybook.js.org/images/social/og-home.jpg",
//       },
//       {
//         id: 7,
//         createdAt: "2023-01-30T04:04:00Z",
//         url: "https://testing-library.com/",
//         title: "Testing Library | Testing Library",
//         description: "Simple and complete testing utilities that encourage good testing practices",
//         imageSource: "https://testing-library.com/img/octopus-128x128.png",
//       },
//       {
//         id: 8,
//         createdAt: "2022-11-27T12:24:09Z",
//         url: "https://instagram.com/",
//         title: "Instagram",
//         description:
//           "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.",
//         imageSource: "https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png",
//       },
//       {
//         id: 9,
//         createdAt: "2023-04-15T08:11:20Z",
//         url: "https://www.naver.com/",
//         title: "네이버",
//         description: "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요",
//         imageSource: "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
//       },
//     ],
//     count: 9,
//   },
// };
export async function getFolderInfo() {
  const url = createApiUrl('sample/folde');

  const response = await fetch(url);
  const result = await response.json();
  const responseError = result.error;

  if (!response.ok) {
    throw new Error(`Folder response error: ${responseError}`);
  }

  return result;
}
