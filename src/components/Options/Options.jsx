import css from './Options.module.css';
export const Options = ({
  updateFeedback,
  totalFeedback,
  feedBack: { good, neutral, bad },
}) => {
  return (
    <div className={css.container}>
      <button className={css.good} onClick={updateFeedback(good)}>
        good
      </button>
      <button className={css.neutral} onClick={updateFeedback(neutral)}>
        neutral
      </button>
      <button className={css.bad} onClick={updateFeedback(bad)}>
        bad
      </button>
      {totalFeedback > 0 && <button className={css.reset}>reset</button>}
    </div>
  );
};
