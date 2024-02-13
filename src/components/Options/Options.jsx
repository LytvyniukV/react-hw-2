import css from './Options.module.css';
import { SlLike, SlDislike } from 'react-icons/sl';
import { FiMinusCircle } from 'react-icons/fi';
import { GrPowerReset } from 'react-icons/gr';
import { Button } from '../Button/Button';

export const Options = ({ updateFeedback, totalFeedback, clearFeedback }) => {
  return (
    <div className={css.container}>
      <Button className={css.good} onUpdate={() => updateFeedback('good')}>
        good <SlLike size={15} className={css.icon} />
      </Button>
      <Button
        className={css.neutral}
        onUpdate={() => updateFeedback('neutral')}
      >
        neutral <FiMinusCircle size={15} className={css.icon} />
      </Button>
      <Button className={css.bad} onUpdate={() => updateFeedback('bad')}>
        bad <SlDislike size={15} className={css.icon} />
      </Button>
      {totalFeedback > 0 && (
        <button className={css.reset} onClick={clearFeedback}>
          reset <GrPowerReset className={css.icon} size={15} />
        </button>
      )}
    </div>
  );
};
