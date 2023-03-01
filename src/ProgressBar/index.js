/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import './ProgressBar.css';
import * as Progress from '@radix-ui/react-progress';

// Utils
const calPorcentaje = (t, c) => {
  const P = (100 / t) * c;
  return Math.round(P);
};

export default function ProgressBar({ completedTodos, totalTodos, loading }) {
  const progressPorcentaje = calPorcentaje(totalTodos, completedTodos);

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPorcentaje), 200);
    return () => clearTimeout(timer);
  }, [progressPorcentaje]);

  return (
    <Progress.Root
      className={`ProgressRoot ${loading === true && 'ProgressRoot--loading'}`}
      value={66}
    >
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}
