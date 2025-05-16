import React, { useState } from 'react'
import MapView from './components/MapView.jsx'
import Countdown from './components/Countdown.jsx'
import { calcDistance, estimateTime } from './utils/route.js'

export default function App() {
  const [userPosition, setUserPosition] = useState([48.7758, 9.1829]) // Stuttgart
  const [lastSeen, setLastSeen] = useState([48.7758, 9.1829])
  const [showCountdown, setShowCountdown] = useState(false)

  const distance = calcDistance(userPosition, lastSeen)
  const timeMin = estimateTime(distance)

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Stuttgart Yard</h1>
      <p>
        Deine Position: {userPosition[0].toFixed(4)}, {userPosition[1].toFixed(4)}
      </p>
      <p>
        Letzte Sichtung: {lastSeen[0].toFixed(4)}, {lastSeen[1].toFixed(4)}
      </p>
      <p>
        Entfernung: {distance.toFixed(2)} km — geschätzte Zeit: {timeMin.toFixed(0)} Minuten
      </p>
      <button onClick={() => setShowCountdown(true)}>Countdown starten</button>
      {showCountdown && <Countdown seconds={timeMin * 60} />}

      <MapView />
    </div>
  )
}
