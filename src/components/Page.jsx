import { useRef } from 'react'
import { usePageEffects } from '../hooks/usePageEffects'

/*
 * Renders a ported page body (raw HTML imported with ?raw) and wires up the
 * shared page effects (reveal, counters, tilt, filters, link interception).
 * `extraProps` lets a page set attributes like data-hero on the wrapper.
 */
export default function Page({ html, className, extraProps = {} }) {
  const ref = useRef(null)
  usePageEffects(ref)
  return (
    <div
      ref={ref}
      className={className}
      {...extraProps}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
