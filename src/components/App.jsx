import { Description } from './Description/Description';
import { useState } from 'react';
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
    setTotalFeedback(feedbacks.good + feedbacks.neutral + feedbacks.bad);
    setPositivePercent(
      Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)
    );
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <Feedback
        positivePercent={positivePercent}
        totalFeedback={totalFeedback}
        feedbacks={feedbacks}
      />
    </>
  );
}

export default App;
