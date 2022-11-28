import { Gallery, Newsletter, Offers } from 'modules'

export const WelcomePage: React.FC = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px'
    }}
  >
    <Offers />
    <Gallery />
    <Newsletter />
  </div>
)
