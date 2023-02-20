import React from 'react';
import './ProgressBar.css';
import * as Progress from '@radix-ui/react-progress';

export const ProgressBar = ({ total, completed }) => {

  const progressPorcentaje = calPorcentaje(total, completed);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPorcentaje), 200);
    return () => clearTimeout(timer);
  }, [progressPorcentaje]);

  return (
    <Progress.Root className="ProgressRoot" value={66}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

// Utils
const calPorcentaje = (t, c) => {
  const P = 100 / t * c
  return Math.round(P);
}