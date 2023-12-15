import stylesPin from './pin.module.scss';

export const Pin = ({ children, modifiedStyle = '' }) => {
  return (
    <div className={`${stylesPin.container} ${modifiedStyle}`}>
      <div className={stylesPin.content}>
        <span className={stylesPin.text}>{children}</span>
        <div className={stylesPin.decorPin} />
      </div>
    </div>
  );
};
