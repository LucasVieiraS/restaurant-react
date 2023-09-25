import styles from './Filters.module.scss';
import filters from './filters.json';

export default function Filters() {
  return (
    <div className={styles.filters}>
      {filters.map((option) => {
        return <button
          className={styles.filters__filter}
          key={option.id}
        >{option.label}</button>
      })}
    </div>
  );
}
