import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    startTime,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const countdownProgress = (100 - ((60 * minutes + seconds) * 100) / startTime);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          type="button"
          className={styles.countdownButton}
        >
          Ciclo encerrado
          <img src="icons/check-circle.svg" alt="Check"/>
          <div
            style={{ width: '100%' }}
            className={styles.countdownProgress}
          />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={
                `${styles.countdownButton} ${styles.countdownButtonActive}`
              }
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="icons/close.svg" alt="Close"/>
              <div
                style={{ width: `${countdownProgress}%` }}
                className={styles.countdownProgress}
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
