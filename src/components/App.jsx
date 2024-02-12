import { Description } from './Description/Description';
import { useEffect, useState } from 'react';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
function App() {
  const [feedbacks, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [positivePercent, setPositivePercent] = useState(0);
  const updateFeedback = feedback => {
    setFeedback({
      ...feedbacks,
      [feedback]: feedbacks[feedback] + 1,
    });
  };
  useEffect(() => {
    setTotalFeedback(feedbacks.good + feedbacks.neutral + feedbacks.bad);
  }, [feedbacks.good, feedbacks.neutral, feedbacks.bad]);

  useEffect(() => {
    setPositivePercent(
      Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)
    );
  }, [feedbacks.neutral, feedbacks.good]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        feedBack={feedbacks}
      />
      <Feedback
        positivePercent={positivePercent}
        totalFeedback={totalFeedback}
        feedbacks={feedbacks}
      />
    </>
  );
}

export default App;
