import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Searchbar from "./components/Searchbar";
import { useState } from "react";

export default function Menu() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          The house of the code and dough!
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Menu</h3>
        <Searchbar search={search} setSearch={setSearch}/>
      </section>
    </main>
  );
}
