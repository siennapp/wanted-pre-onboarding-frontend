import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInApi, signUpApi } from "../api/authApi";



function SignForm ({formType}:{formType:string}) {
    
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({ email:'', password:'' })
    const [isDisabled, setDisabled ] = useState(true);

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const{type ,value} = event.currentTarget;
        setUserInfo({...userInfo,[type]:value });
        validate(userInfo);
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (formType === 'signup' ){
            signUpApi(userInfo).then((res)=> {
                res?.status === 201 && navigate('/signin');
            });
        } else{
            signInApi(userInfo).then((res)=>{
                res?.status === 200 && navigate('/todo', { replace: true });
            })
        }
    }

    const validate = (values:any) => {
        values.email.includes('@') && values.password.length >= 8 ? setDisabled(false) : setDisabled(true);
    }
    return(
        <div className="container">
            <div className="wrap">
                <div className="inner-box">
                    <h1>{formType === 'signup'? '회원가입':'로그인'}</h1>
                    <form onSubmit={onSubmit}>
                        <input 
                            type="email"
                            data-testid="email-input"
                            placeholder="@를 포함한 이메일주소"
                            value={userInfo.email}
                            onChange={onChange}
                            />
                        <input 
                            type="password"
                            autoComplete="off"
                            data-testid="password-input" 
                            placeholder="8자리 이상 비밀번호"
                            value={userInfo.password}
                            onChange={onChange}
                            />
                        {formType === 'signup'? (
                            <button className="submit" data-testid="signup-button" disabled={isDisabled}>회원가입</button>
                        ):(
                            <button className="submit"  data-testid="signin-button" disabled={isDisabled}>로그인</button>        
                        )}
                        
                    </form>
                    {formType === 'signin'&&  <Link to='/signup'>회원가입</Link>}
                </div>
            </div>
        </div>
    )
}

export default SignForm;