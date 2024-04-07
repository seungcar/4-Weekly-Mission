import { SignLayout } from "@/src/page-layout/Sign";
import { SignHeader } from "";
import { SignForm } from "";
import { SignFooter } from "";

const SignUpPage = () => {
  return (
    <>
      <SignLayout>
        <SignHeader
          message="이미 회원이신가요?"
          linktext="로그인 하기"
          linkhref="나중에 route로 구현"
        />
        <SignForm
          buttontext="회원가입"
        />
      <SignFooter
        socialtext="다른 방식으로 가입하기"
      />
      </SignLayout>
    </>
  );
};

export default SignUpPage;
