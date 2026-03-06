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
        Bem-vindo ao universo dos vinhos de <span className="splash__name">Simona</span>
      </p>
    </div>
  )
}

export default SplashScreen
