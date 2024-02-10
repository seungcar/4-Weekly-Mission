import SocialLogin from "../components/Auth/SocialLogin";
import AuthTitle from "../components/Auth/AuthTitle";
import AuthForm from "../components/Auth/AuthForm";
import "../styles/sign.css";
function Login(){
    return (
        <div className="wrap">
        <main className="sign">
        <div className="sign__box">
            <AuthTitle text="이미 회원이신가요?" action="/signin" actionText="로그인 하기"/>
            <AuthForm option={false}/>
        </div>
        <SocialLogin/>
    </main>
    </div>
    )
}

export default Login;