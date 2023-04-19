import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInApi, signUpApi } from "../api/authApi";



function SignForm ({formType}:{formType:string}) {
    
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({ email:'', password:'' })
    const [isDisabled, setDisabled] = useState(true);
    const [isValid, setValid ] = useState({
        email: false,
        password: false,
        all: true,
    });

    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const{ type, value } = event.currentTarget;
        setUserInfo({...userInfo,[type]:value });
        setDisabled( !validate( type, value ));
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

    const validate = ( type: string, value: string) => {
        if( type === 'email'){
            value.includes('@') ? setValid({ ...isValid, email:true}) : setValid({ ...isValid, email:false}) ;
        }
        if( type === 'password'){
            value.length >= 8 ? setValid({ ...isValid, password:true}) : setValid({ ...isValid, password:false});
        }

        if(isValid.email && isValid.password ) return true;
        else return false;
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
                            placeholder="이메일주소"
                            value={userInfo.email}
                            onChange={onChange}
                        />
                        {!isValid.email && userInfo.email && <span className="validate-text">이메일주소는 @를 포함하여야합니다.</span>}
                        <input 
                            type="password"
                            autoComplete="off"
                            data-testid="password-input" 
                            placeholder="비밀번호"
                            value={userInfo.password}
                            onChange={onChange}
                        />
                        {!isValid.password && userInfo.password && <span className="validate-text">비밀번호는 8자 이상이어야합니다.</span>}
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