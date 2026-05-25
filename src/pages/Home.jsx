import { useRef } from 'react'
import html from './home.html?raw'
import { usePageEffects } from '../hooks/usePageEffects'
import { useHeroScene } from '../hooks/useHeroScene'

export default function Home() {
  const ref = useRef(null)
  usePageEffects(ref)
  useHeroScene(ref)
  return (
    <div
      ref={ref}
      data-hero="3d"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
