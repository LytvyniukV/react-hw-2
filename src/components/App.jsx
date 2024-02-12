import { Description } from './Description/Description';
import { useState, useEffect } from 'react';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
function App() {
  const [feedbacks, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem('feedback');
    if (saveFeedback) {
      return JSON.parse(saveFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });
  const updateFeedback = feedback => {
    setFeedback({
      ...feedbacks,
      [feedback]: feedbacks[feedback] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbacks));
  }, [feedbacks]);
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercent = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  const clearFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        clearFeedback={clearFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          positivePercent={positivePercent}
          totalFeedback={totalFeedback}
          feedbacks={feedbacks}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
