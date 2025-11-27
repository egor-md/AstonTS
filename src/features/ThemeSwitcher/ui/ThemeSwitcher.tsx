import { Button } from "../../../shared/ui/Button/Button";
import { useTheme } from "../../../shared/lib/theme/ThemeContext";

export function ThemeSwitcher(){

    const {theme, toggleTheme} = useTheme(); 

    return (
        <Button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</Button>
    )
}