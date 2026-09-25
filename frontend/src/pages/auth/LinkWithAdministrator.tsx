
import {Link} from 'react-router-dom'
export default function LinkWithAdministrator() {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col'>
            <div className="text-text-muted">АИС ДШИ</div>
            <div className='w-1/4 h-1/4 border-2'>
                <textarea className='w-full h-full' placeholder='Опишите вашу проблему'/>
                
            </div>
            <Link to='/' className=' h-1/20 bg-btn-accent text-btn-text rounded-md border border-border-main w-auto'>Отправить</Link>
        
        </div>
    )
};