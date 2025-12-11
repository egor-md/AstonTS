interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function PostLengthFilter({ value, onChange }: Props) {
  return (
    <input
      type="number"
      style={{ width: '100px', margin: '0 auto' }}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder="Введите длину заголовка"
    />
  );
}