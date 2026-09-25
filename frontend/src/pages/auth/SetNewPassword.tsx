

export default function SetNewPassword() {
    return (

        <div className="w-full bg-bg-page h-screen flex items-center justify-center flex-col">

            <div className="text-text-muted">АИС ДШИ</div>

            <div className="w-1/4 h-20 bg-bg-card border border-border-main flex justify-between flex-col items-center rounded-4xl">
            
                <div className="w-full flex items-center flex-col">
                    <div>Ваш логин в системе:</div>
                    <input disabled className="h-10 w-1/2 bg-bg-input rounded-md border border-border-main " value="loginExample123">
                        
                    </input>
                </div>
                
            </div>

            <div className="w-1/4 h-2/7 bg-bg-card border border-border-main flex justify-between flex-col items-center rounded-4xl">
            
                <div className="w-full flex justify-between flex-col items-center">
                    
                    <div>Придумайте новый пароль</div>
                    <div className="relative w-1/2 flex items-center"><input className="h-10 w-full bg-bg-input rounded-md border border-border-main"></input></div>

                    <div>Введите новый пароль ещё раз</div>
                    <div className="relative w-1/2 flex items-center"><input className="h-10 w-full bg-bg-input rounded-md border border-border-main"></input></div>
                </div>
                    

                <div className="pb-2 w-1/2" ><button className="bg-btn-accent hover:bg-btn-hover cursor-pointer text-btn-text h-10 w-full rounded-md">Изменить пароль</button></div>

            </div>


        </div>
        
    );
}