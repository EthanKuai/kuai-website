import SceneLoader from "@/components/SceneLoader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Ethan
        <br />
        Kuai
      </h1>
      <h2 className={styles.subtitle}>
        If thou gaze into the abyss, the abyss gazes into thee.
      </h2>
      <p className={styles.introduction}>Hi...</p>
      <SceneLoader />
    </div>
  );
}
