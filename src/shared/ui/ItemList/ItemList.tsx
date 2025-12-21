import type { ReactNode } from 'react';
import './ItemList.css';

type ItemListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string | number;
  className?: string;
};

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  className,
}: ItemListProps<T>) {
  return (
    <ul className={`${className ?? ''}`}>
      {items.map((item) => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
