import { useEffect, useState } from 'react';
import stylesButton from './button.module.scss';

export const Button = ({
  handlerButtonClick,
  type = 'dark',
  disabled = false,
  modifiedStyle = '',
  children,
}) => {
  const [style, setStyle] = useState('');

  useEffect(() => {
    switch (type) {
      case 'dark':
        setStyle(stylesButton.dark);
        break;
      case 'transparentWhite':
        setStyle(stylesButton.transparentWhite);
        break;
      case 'transparentDark':
        setStyle(stylesButton.transparentDark);
        break;
      default:
        break;
    }
  }, []);

  return (
    <button type='button'
      className={`${stylesButton.buttonMain} ${modifiedStyle} ${style} ${
        disabled ? stylesButton.disabled : ''
      }`}
      onClick={handlerButtonClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
