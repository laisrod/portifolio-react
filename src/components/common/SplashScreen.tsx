interface SplashScreenProps {
  visible: boolean
}

function SplashScreen({ visible }: SplashScreenProps) {
  return (
    <div
      className={`splash${visible ? '' : ' splash--hidden'}`}
      aria-hidden={!visible}
    >
      <div className="splash__grid" aria-hidden="true" />
      <p className="splash__text">
        Hi, I'm <span className="splash__name">Laís</span>. Welcome To My
        Portfolio
      </p>
    </div>
  )
}

export default SplashScreen
