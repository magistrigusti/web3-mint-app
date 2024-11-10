import React, { useEffect, useRef } from 'react';
import '../App.css';

const MainButton = () => {
  const buttonRef = useRef(null);
  let initialization = false;
  let ether;
  let account;

  useEffect(() => {
    const mainButton = buttonRef.current;

    if (mainButton) {
      const handleClick = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
          ether = window.ethereum; // Исправлено здесь
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
              .catch(error => {console.log(error)});
            account = accounts[0];
            initialization = true;
            console.log('Подключённые аккаунты:', accounts);
          } catch (error) {
            console.error('Ошибка при подключении к MetaMask:', error);
          }
        } else {
          console.log('MetaMask не установлен');
        }
      };

      mainButton.addEventListener("click", handleClick);

      // Убираем слушатель при размонтировании компонента
      return () => {
        mainButton.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <button
      className="main__button main__button--big"
      id="mainButton"
      ref={buttonRef}
    >
      Подключить кошелек
    </button>
  );
};

export default MainButton;
