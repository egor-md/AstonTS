import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'
import './Header.css'


const mOn = () => {
    return(            
        console.log(123)        
    )
}

export function Header() {
    return (
        <header style={{color : 'red'}}>
            <h3>Header</h3>
            <ThemeSwitcher></ThemeSwitcher>
        </header>
    )
}