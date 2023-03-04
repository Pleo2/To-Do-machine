import React from 'react';
import './ProgressBar.css';
import * as Progress from '@radix-ui/react-progress';
import PropTypes from 'prop-types';

export default function ProgressBar({ completedTodos, totalTodos, loading }) {
  const progressPorcentaje = Math.round((100 / totalTodos) * completedTodos);

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

ProgressBar.propTypes = {
  completedTodos: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
