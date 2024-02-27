import './styles.css'

import colorData from './data/colorData'
import Header from './components/Header'

export default function App() {
  function ColorCard({ color, index }) {
    return (
      <div className="color-card" style={{ background: color }}>
        <p>
          <span>{index}</span> {color}
        </p>
      </div>
    )
  }

  return (
    <div className="wrapper">
      <Header />

      {colorData.map((color, index) => (
        <ColorCard key={index} color={color} index={index + 1} />
      ))}
    </div>
  )
}
