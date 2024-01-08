'use client'
import Matrix from "@/app/components/matrix"
import { useEffectOnce } from '@/app/lib/utils'

export default function MapMatrix() {
  useEffectOnce(() => {
    
    const matrix = new Matrix('map-matrix', {
      pixelSize: [16, 16],
      gap: 2,
      radius: 100,
      // offColor: 'var(--background)',
      // onColor: '#333',
      offColor: 'var(--background-secondary)',
      onColor: 'var(--background)',
      maxGridSize: [80, 45],
      delta: 100
    })

    matrix.update(mtx => {
      mtx.clear()
      mtx.display('*')
    })
  }, [])
  
  return (
    <div id="map-matrix"></div>
  )
}
