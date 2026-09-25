import {Link} from 'react-router-dom'
export default function RecoveryPage() {
    return (
        <div className="w-full bg-bg-page h-screen flex items-center justify-center flex-col">
            <div className="text-text-muted">АИС ДШИ</div>

            <div className="w-1/4 h-2/6 bg-bg-card border border-border-main flex justify-between flex-col items-center rounded-4xl">
                
                <div className="pt-2">Восстановление</div>

                <div className="w-full flex items-center flex-col">
                    <Link to='/RecoveryEmail' className="h-10 min-w-1/2 bg-btn-accent text-btn-text rounded-md border border-border-main w-auto">Отправить ссылку на почту</Link>
                </div>
                <div className="w-full flex items-center flex-col">
                    <Link to='/RecoveryPhone' className="h-10 min-w-1/2 bg-btn-accent text-btn-text rounded-md border border-border-main w-auto">Отправить код на номер телефона</Link>
                </div>
                <div className="text-text-muted pb-2"><Link to='/Help'>Связаться с администратором</Link></div>
            
            </div>
        </div>
    );
}
