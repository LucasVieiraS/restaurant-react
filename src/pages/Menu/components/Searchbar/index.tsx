import React from "react";
import styles from "./Searchbar.module.scss";

import { CgSearch } from "react-icons/cg";

interface SearchbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar({ search, setSearch }: SearchbarProps) {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        placeholder="Search for your dish..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <CgSearch />
    </div>
  );
}
