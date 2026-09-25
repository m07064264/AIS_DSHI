import {Link} from 'react-router-dom'
export default function RecoveryPhone() {
    return (
        <div className="w-full bg-bg-page h-screen flex items-center justify-center flex-col">
            <div className="text-text-muted">АИС ДШИ</div>

            <div className="w-1/4 h-2/6 bg-bg-card border border-border-main flex flex-col items-center rounded-4xl justify-between">
                
                <div className="pt-2">Введите код из смс-сообщения</div>

                <div className="flex flex-col items-center justify-around h-3/4"> 
                    <div className="w-full flex items-center flex-row justify-around">
                        <input type="text" maxLength={1} className="h-10 w-10 bg-bg-input rounded-md border border-border-main text-center text-lg font-semibold focus:border-btn-accent outline-none" ></input>
                        <input type="text" maxLength={1} className="h-10 w-10 bg-bg-input rounded-md border border-border-main text-center text-lg font-semibold focus:border-btn-accent outline-none" ></input>
                        <input type="text" maxLength={1} className="h-10 w-10 bg-bg-input rounded-md border border-border-main text-center text-lg font-semibold focus:border-btn-accent outline-none" ></input>
                        <input type="text" maxLength={1} className="h-10 w-10 bg-bg-input rounded-md border border-border-main text-center text-lg font-semibold focus:border-btn-accent outline-none" ></input>
                        <input type="text" maxLength={1} className="h-10 w-10 bg-bg-input rounded-md border border-border-main text-center text-lg font-semibold focus:border-btn-accent outline-none" ></input>
                        <input type="text" maxLength={1} className="h-10 w-10 bg-bg-input rounded-md border border-border-main text-center text-lg font-semibold focus:border-btn-accent outline-none" ></input>
                    </div>
                <div className="pb-2 w-auto" ><button className="bg-btn-accent hover:bg-btn-hover cursor-pointer text-btn-text h-10 w-full rounded-md">Выслать новый код</button></div>
                <div className="pb-2 w-1/2" ><Link to="/SetNewPassword" className="bg-btn-accent hover:bg-btn-hover cursor-pointer text-btn-text h-10 w-full rounded-md">Подтвердить</Link></div>
            </div>
               
            </div>
        </div>
    );
}
