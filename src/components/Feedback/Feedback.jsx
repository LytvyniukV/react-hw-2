import css from './Feedback.module.css';

export const Feedback = ({
  positivePercent,
  totalFeedback,
  feedbacks: { good, neutral, bad },
}) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {good}</p>
      <p className={css.text}>Neutral: {neutral}</p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {positivePercent}%</p>
    </div>
  );
};
