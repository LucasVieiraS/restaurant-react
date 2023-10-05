import styles from './Filters.module.scss';
import filters from './filters.json';

type IOption = typeof filters[0]

interface FiltersProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filters({ filter, setFilter }: FiltersProps) {
  const selectFilter = (option: IOption) => setFilter(option.id)
  return (
    <div className={styles.filters}>
      {filters.map((option) => {
        return <button
          className={`${
            styles.filters__filter
          } ${option.id === filter && styles['filters__filter--active']}`}
          key={option.id}
          onClick={() => selectFilter(option)}
        >{option.label}</button>
      })}
    </div>
  );
}
