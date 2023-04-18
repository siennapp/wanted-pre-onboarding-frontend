import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /*custom */

    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
    
    html, *{
        box-sizing: border-box; 
        font-family: 'Lato', sans-serif;
        color: #333333; 
    }
    
    .container{
        width: 100%;
        height: 100vh;
        text-align: center; 
        padding: 80px 0;
        background: #f7f7f7; 
    }
    .wrap{
        width: 100%; 
        height: 100%; 
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        padding-bottom: 100px;
    }
    .inner-box{
        background: #ffffff;
        padding: 60px 40px 90px 40px;  
        border-radius: 5px; 
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.02);
        position: relative; 
        a{
            position: absolute; 
            bottom: 25px; 
            left: 50%;
            transform: translateX(-50%); 
            font-size: .875rem;
        }
    }
    .todo-box{
        background: #ffffff;
        padding: 60px 40px 60px 40px;  
        border-radius: 5px; 
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.02);
        position: relative; 
        width: 400px;
    }
   
    h1{
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 50px; 
    }
    input[type="text"],
    input[type="email"],
    input[type="password"]{
        width: 100%;
        height: 45px;
        border: 1px solid #e1e2e3;
        border-radius: 5px; 
        padding: 0 8px;  
        margin: 0 3px; 
        box-sizing: border-box; 
        color: #333; 
        font-size: 1rem;
       // background: #efefef; 
        &::placeholder{
            color: #c0c0c0; 
        }
        &:disabled{
            background: transparent;
            color: #333; 
        }
        &:focus{
            outline-color: rgb(51, 102, 255);
        }
    }
    button{
        width: 45px;
        height: 45px;
        border: 0;
        border-radius: 5px; 
        margin: 0 3px; 
        background: rgba(44, 91, 242,1);
        color: #fff; 
        font-size: 1rem;
        box-sizing: border-box; 
        cursor: pointer; 
        transition: .2s;
        flex-shrink: 0;
        &.submit{
            width: 100%;
            height: 50px;
            margin-top: 20px; 
        }
        &:hover{
            opacity: 1;
        }
        svg{
            fill: #fff; 
        }
        &:disabled{
            background: rgba(44, 91, 242, .5);
            opacity: 1 !important; 
            cursor: auto;
        }
    }
    form{
        display: flex;
        margin: 0; 
        align-items: center; 
        flex-direction: column;
        min-width: 300px;
        input{
            margin-bottom: 15px !important;
        }
        &.todo-add-form{
            width: 100%;
            max-width: 320px;
            margin: 0 auto; 
            flex-direction: row;
            input{
                margin-bottom: 0!important;
            }
        }
    }
  
    ul{
        width: 100%;
        max-width: 320px;
        margin: 0 auto; 
        margin-top: 30px;
    }
    .todo-item{
        width: 100%; 
        display: flex;
        align-items: center; 
        margin-bottom: 12px;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        padding: 10px 12px; 
        form{
            min-width: 0; 
            flex-direction: row;
            align-items: center; 
            input{
                margin-bottom: 0 !important; 
            }
        }
        > div{
            flex: 1; 
            display: flex; 
            align-items: center; 
        }
        .todo-text{
            flex: 1; 
            height: 40px;
            border: 1px solid #ffffff; 
            text-align: left; 
            margin: 0 3px; 
            padding: 0 8px; 
            line-height: 38px; 
        }
        input[type="checkbox"]{
            display: none; 
            & + label{
                width: 20px; height: 20px;
                border-radius: 50%;
                border: 1px solid  rgba(44, 91, 242,1);; 
                margin-right: 3px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                cursor: pointer; 
                svg{
                    fill: transparent; 
                }
            }
            &:checked + label{
                background:  rgba(44, 91, 242,1);
                svg{
                    fill: #fff; 

                }
            }
        }
        input[type="text"]{
            height: 40px;
        }
        button{
            width: 32px; height: 32px;
            background: #fff;   
            border:1px solid rgba(44, 91, 242,1);
            svg{
                fill: rgba(44, 91, 242,1);
            }
            &[type="submit"]{
                background: rgba(44, 91, 242,1);
                border:1px solid rgba(44, 91, 242,1);
                svg{
                    fill: #ffffff;
                }
            }
        }
    }
`
export default GlobalStyle;

