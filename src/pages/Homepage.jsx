import styles from "./Homepage.module.css";
function Homepage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          WordWise keeps track of your advantures.
        </h1>
        <h2>
          A world map that trachks your footsteps into every city you can think
          of. Never forget your wonderful experieces, and show your frinds how
          you have wandered the word.
        </h2>
      </section>
    </main>
  );
}

export default Homepage;
