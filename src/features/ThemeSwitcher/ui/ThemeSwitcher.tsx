import { Button } from "../../../shared/ui/Button/Button";
import { useTheme } from "../../../shared/lib/theme/ThemeContext";

export function ThemeSwitcher(){

    const {theme, tougleTheme} = useTheme(); 

    return (
        <Button onClick={tougleTheme}>{theme === 'light' ? '🌙' : '☀️'}</Button>
    )
}