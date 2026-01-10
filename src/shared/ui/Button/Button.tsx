import './Button.css'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}

export function Button({ children, onClick, className } : ButtonProps){
    return(
        <button className={className} onClick={onClick}>{children}</button>
    )
}