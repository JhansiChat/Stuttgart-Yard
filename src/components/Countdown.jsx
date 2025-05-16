import React, { useState, useEffect } from 'react'

export default function Countdown({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    if (timeLeft === 0) return
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  return <div>Countdown: {timeLeft} Sekunden</div>
}
