interface Props {
    children: React.ReactNode;
    onClick: () => void
}


export function PostLengthFilter({ children, onClick }: Props) {
    return (
        <button onClick={onClick} >
            {children}
        </button>
    );
}