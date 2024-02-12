import css from './Options.module.css';
import { SlLike, SlDislike } from 'react-icons/sl';
import { FiMinusCircle } from 'react-icons/fi';
import { GrPowerReset } from 'react-icons/gr';
export const Options = ({ updateFeedback, totalFeedback, clearFeedback }) => {
  return (
    <div className={css.container}>
      <button className={css.good} onClick={() => updateFeedback('good')}>
        good <SlLike size={15} className={css.icon} />
      </button>
      <button className={css.neutral} onClick={() => updateFeedback('neutral')}>
        neutral <FiMinusCircle className={css.icon} size={15} />
      </button>
      <button className={css.bad} onClick={() => updateFeedback('bad')}>
        bad <SlDislike size={15} className={css.icon} />
      </button>
      {totalFeedback > 0 && (
        <button className={css.reset} onClick={clearFeedback}>
          reset <GrPowerReset className={css.icon} size={15} />
        </button>
      )}
    </div>
  );
};
