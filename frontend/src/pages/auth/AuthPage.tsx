import {Eye, EyeClosed} from 'lucide-react';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function AuthPage() {
    const [eyeState, setEyeState] = useState(false);
    
    return (
        <div className="w-full bg-bg-page h-screen flex items-center justify-center flex-col">
            <div className="text-text-muted">АИС ДШИ</div>

            <div className="w-11/12 max-w-md bg-bg-card border border-border-main flex flex-col items-center rounded-4xl pt-4 pb-8 px-6 gap-5">
                
                <div className="text-2xl">Авторизация</div>

                <div className="w-full flex items-center flex-col">
                    <div>Введите логин</div>
                    <input className="h-10 w-1/2 bg-bg-input rounded-md border border-border-main" >
                    
                    </input>
                </div>
                <div className="w-1/2 flex items-center flex-col">
                    <div>Введите пароль</div>

                    
                    <div className="relative w-full flex items-center">
                    <input type = {eyeState ? "password" : "text"} className="h-10 w-full bg-bg-input rounded-md border border-border-main "></input> 
                    <div onClick={() => setEyeState(!eyeState)}>{eyeState ? <EyeClosed className='absolute right-3 cursor-pointer -translate-y-1/2'></EyeClosed> : <Eye className='absolute right-3 cursor-pointer -translate-y-1/2'></Eye>}</div>
                    </div>
                </div>
                <div className="text-text-muted"><Link to="/RecoveryPage">Забыли пароль?</Link></div>
                <div className="pb-2 w-1/2 flex justify-center" ><Link to="/" className=" justify-center items-center flex bg-btn-accent hover:bg-btn-hover cursor-pointer text-btn-text h-10 w-1/2 rounded-md center">ВОЙТИ</Link></div>
            
            </div>
        </div>
    );
}