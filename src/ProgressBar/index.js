/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import './ProgressBar.css';
import * as Progress from '@radix-ui/react-progress';
import { TodoContext } from '../TodoContext';

// Utils
const calPorcentaje = (t, c) => {
  const P = (100 / t) * c;
  return Math.round(P);
};

export default function ProgressBar() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const progressPorcentaje = calPorcentaje(totalTodos, completedTodos);

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPorcentaje), 200);
    return () => clearTimeout(timer);
  }, [progressPorcentaje]);

  return (
    <Progress.Root
      className="ProgressRoot"
      value={66}
    >
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}