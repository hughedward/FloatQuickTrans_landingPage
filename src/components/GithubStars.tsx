'use client'

import { useEffect, useState } from 'react'

export function GithubStars() {

  const [stars, setStars] = useState<number | null>(null)

  const formatStars = (count: number | null): string => {
    if (count === null) return ''
    return new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short'
    }).format(count)
  }
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('/api/github-stars')
        const data = await response.json()
        setStars(data.stars)
      } catch (error) {
        console.error('Failed to fetch stars:', error)
      }
    }

    fetchStars()
  }, [])

  if (stars === null) return null

  return (
    <span className="ml-1 text-sm text-muted-foreground">
      {formatStars(stars)}
    </span>
  )
}
