
import {CornerDownLeft} from 'lucide-react';
import {Link} from 'react-router-dom';

export default function RecoveryEmail() {
    return (
        <div className="w-full bg-bg-page h-screen flex items-center justify-center flex-col">
            <div className="text-text-muted">АИС ДШИ</div>

            <div className="w-1/2 h-1/5 bg-bg-card border border-border-main text-center flex flex-col items-center justify-around rounded-4xl text-3xl">
                
                <div className="">На ваш почтовый ящик было отправлено письмо для восстановления доступа</div>
                <div><Link to="/" className="bg-btn-accent flex flex-row hover:bg-btn-hover text-btn-text h-10 w-full rounded-md relative items-center cursor-pointer"><CornerDownLeft/>Вернуться</Link></div>

                
            
            </div>
        </div>
    );
}