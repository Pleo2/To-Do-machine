/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import './ProgressBar.css'
import * as Progress from '@radix-ui/react-progress'
import PropTypes from 'prop-types'

export default function ProgressBar({ completedTodos, totalTodos, loading }) {
  const progressPorcentaje = Math.round((100 / totalTodos) * completedTodos)

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progressPorcentaje), 200)
    return () => clearTimeout(timer)
  }, [progressPorcentaje])

  return (
    <Progress.Root
      data-testid='ProgressRoot'
      className={`ProgressRoot ${loading === true && 'ProgressRoot--loading'}`}
      value={66}
      >
      <Progress.Indicator
        data-testid='ProgressIndicator'
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}

ProgressBar.propTypes = {
  completedTodos: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
}
