import stylesPin from './pin.module.scss';

export const Pin = ({ children, modifiedStyleMain= '', modifiedStyleText='', modifiedStyleIcon=''}) => {
  return (
    <div className={`${stylesPin.container} ${modifiedStyleMain}`}>
      <div className={stylesPin.content}>
        <span className={`${stylesPin.text} ${modifiedStyleText}`}>{children}</span>
        <div className={`${stylesPin.decorPin} ${modifiedStyleIcon}`} />
      </div>
    </div>
  );
};
