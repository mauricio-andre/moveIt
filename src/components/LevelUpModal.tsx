import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/LevelUpModal.module.css';

import Twitter from '../../public/icons/twitter.svg';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>
        </div>

        <button type="button" className={styles.close} onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar"/>
        </button>

        <button type="button" className={styles.shareTwitter}>
          Compartilhar no Twitter
          <Twitter />
        </button>
      </div>
    </div>
  );
}
