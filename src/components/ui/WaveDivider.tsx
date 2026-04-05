type WaveVariant = 'hero-to-services' | 'services-to-blog' | 'blog-to-contact'

interface WaveDividerProps {
  variant: WaveVariant
}

interface WaveLayer {
  path: string
  fill: string
  opacity?: number
}

const WAVE_PRESETS: Record<WaveVariant, { viewBox: string; layers: WaveLayer[] }> = {
  'hero-to-services': {
    viewBox: '0 0 1440 120',
    layers: [
      {
        path: 'M0,64 C240,100 480,110 720,80 C960,50 1200,70 1440,96 L1440,120 L0,120 Z',
        fill: '#E8E0F0',
      },
      {
        path: 'M0,80 C320,110 640,100 960,72 C1120,58 1280,66 1440,80 L1440,120 L0,120 Z',
        fill: '#DDD5E8',
        opacity: 0.5,
      },
    ],
  },
  'services-to-blog': {
    viewBox: '0 0 1440 120',
    layers: [
      {
        path: 'M0,40 C360,100 720,20 1080,80 C1260,100 1380,90 1440,60 L1440,120 L0,120 Z',
        fill: '#E8E0F0',
      },
      {
        path: 'M0,60 C240,20 480,100 720,70 C960,40 1200,90 1440,50 L1440,120 L0,120 Z',
        fill: '#DDD5E8',
        opacity: 0.5,
      },
    ],
  },
  'blog-to-contact': {
    viewBox: '0 0 1440 100',
    layers: [
      {
        path: 'M0,50 C360,80 720,30 1080,60 C1260,72 1380,55 1440,40 L1440,100 L0,100 Z',
        fill: '#E8E0F0',
      },
      {
        path: 'M0,65 C480,40 960,75 1440,55 L1440,100 L0,100 Z',
        fill: '#DDD5E8',
        opacity: 0.5,
      },
    ],
  },
}

export function WaveDivider({ variant }: WaveDividerProps) {
  const preset = WAVE_PRESETS[variant]

  return (
    <div className="w-full overflow-hidden leading-[0] -mt-px" aria-hidden="true">
      <svg
        className="block w-full h-auto"
        viewBox={preset.viewBox}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {preset.layers.map((layer, i) => (
          <path
            key={i}
            d={layer.path}
            fill={layer.fill}
            opacity={layer.opacity ?? 1}
          />
        ))}
      </svg>
    </div>
  )
}
