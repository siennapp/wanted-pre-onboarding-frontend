import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return (
        <div className="container">
            <div className="wrap">
                <div className="todo-box">
                    <h1>페이지를 찾을 수 없습니다.</h1>
                    <Link to='/'>메인페이지로 이동</Link>
                </div>
            </div>
        </div>
    )
}