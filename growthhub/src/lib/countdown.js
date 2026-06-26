import { useEffect, useState } from 'react'

export const launchDate = new Date('2026-07-16T00:00:00-04:00')

const oneSecond = 1000
const oneMinute = 60 * oneSecond
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

export function getCountdown(now = Date.now()) {
  const currentTime = Number.isFinite(now) ? now : Date.now()
  const remaining = Math.max(0, launchDate.getTime() - currentTime)

  return {
    days: Math.floor(remaining / oneDay),
    hours: Math.floor((remaining % oneDay) / oneHour),
    minutes: Math.floor((remaining % oneHour) / oneMinute),
    seconds: Math.floor((remaining % oneMinute) / oneSecond),
  }
}

export function padTime(value) {
  return String(Number.isFinite(value) ? value : 0).padStart(2, '0')
}

export function useCountdown() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const updateCountdown = () => setNow(Date.now())
    const intervalId = window.setInterval(updateCountdown, 1000)

    updateCountdown()
    return () => window.clearInterval(intervalId)
  }, [])

  return getCountdown(now)
}
