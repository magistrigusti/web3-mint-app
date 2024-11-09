
import "./App.css";
import telegramIcon from './img/telegram-logo.png';
import youtubeIcon from './img/youtube-logo.png';
import jokerLogo from './img/joker-logo.png';
import walletIcon from './img/wallet.png';
import maticIcon from './img/polygon.png';
import jokerChip from './img/joker-token.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="header__social">
            <a href="#">
              <img src={telegramIcon} alt="" />
            </a>
            <a href="#">
              <img src={youtubeIcon} alt="" />
            </a>
          </div>

          <div className="header__logo">
            <img src={jokerLogo} alt="" />
          </div>

          <h1>Joker Market</h1>

          <div className="header__info">
            <div className="header__cost">
              <img src={maticIcon} alt="" />
              <span>0.00001 MATIC</span>
            </div>

            <div className="header__wallet">
              <img src={walletIcon} alt="" />
              <span className="header__address">0xe55fe...b088c</span>
              <div className="header__seporator"></div>
              <span className="header__balance">0.002</span>
            </div>
          </div>
        </header>

        <section className="main">
          <div className="main__wrapper">
            <h1 className="main__header">
              For mint <br />
              <span>Joker</span> <br /> connect wallet
            </h1>
            <p className="main__discription">
              By clicking the buttom you will create (mint) brand new Joker
              tokens that will belong onlyto you. The maximum number of tokens
              is 1000000
            </p>

            <div className="main__info info">
              <div className="info__block">
                <span>Price</span>
                <div className="info__num">
                  <span>1000</span>
                  <img src={maticIcon} alt="" />
                </div>
              </div>

              <div className="info__block">
                <span>Price</span>
                <div className="info__num">
                  <span>1000</span>
                  <img src={jokerChip} alt="" />
                </div>
              </div>
            </div>

            <button className="main__button main__button--big">
              Connect Wallet
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
