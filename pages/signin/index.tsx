import { SignLayout } from "@/src/page-layout/SignLayout";
import { SignHeader } from "@/src/sign/SignHeader";
// import { SignForm } from "";
// import { SignFooter } from "";

const SignInPage = () => {
  return (
    <SignLayout
      header={
        <SignHeader
          message="회원이 아니신가요?"
          linktext="회원 가입하기"
          // linkhref=
        />
      }
      //   form={
      //   <SignForm
      //     buttontext="로그인"
      //   />
      //   }
      //   footer={
      // <SignFooter
      //   socialtext="소셜 로그인"
      // />
      // </SignLayout>
      // }
    />
  );
};

export default SignInPage;
