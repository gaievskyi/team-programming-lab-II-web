import { Gallery } from 'modules'

export const StorePage: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px'
    }}
  >
    <Gallery />
  </div>
)
