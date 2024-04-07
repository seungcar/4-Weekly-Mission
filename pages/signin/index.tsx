import { SignLayout } from "@/src/page-layout/Sign";
import { SignHeader } from "";
import { SignForm } from "";
import { SignFooter } from "";

const SignInPage = () => {
  return (
    <>
      <SignLayout>
        <SignHeader
          message="회원이 아니신가요?"
          linktext="회원 가입하기"
          linkhref="나중에 route로 구현"
        />
        <SignForm
          buttontext="로그인"
        />
      <SignFooter
        socialtext="소셜 로그인"
      />
      </SignLayout>
    </>
  );
};

export default SignInPage;
