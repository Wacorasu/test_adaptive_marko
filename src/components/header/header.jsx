import { Button } from '../button/button';
import logo from '../../images/logo.svg';
import logoMap from '../../images/logo_yandex-map.svg';
import logoTelegram from '../../images/icons/icon_telegram.svg';
import logoWhatsapp from '../../images/icons/icon_whatsapp.svg';
import stylesHeader from './header.module.scss';

export const Header = () => {
  return (
    <header className={stylesHeader.headerContainer}>
      <div className={stylesHeader.contentContainer}>
        <div className={stylesHeader.logoContainer}>
          <img src={logo} alt='логотип' className={stylesHeader.logo} />
          <img
            src={logoMap}
            alt='рейтинг по яндекс картам'
            className={stylesHeader.logoMap}
          />
        </div>
        <div className={stylesHeader.contactsContainer}>
          <div className={stylesHeader.addressContainer}>
            <h2 className={stylesHeader.label}>Производство кухонь на заказ</h2>
            <span className={stylesHeader.addressText}>
              Анапа, ул. Крылова, д. 27
            </span>
          </div>
          <div className={stylesHeader.socialContactsContainer}>
          <ul className={stylesHeader.iconMessengerContainer}>
            <li>
              <a
                href='https://www.whatsapp.com/'
                target='_blank'
                rel='noreferrer'
                className={`${stylesHeader.iconMessenger}`}
              >
                <img
                  src={logoWhatsapp}
                  alt='иконка ссылки на Whatsapp'
                />
              </a>
            </li>
            <li>
              <a
                href='https://telegram.org/'
                target='_blank'
                rel='noreferrer'
                className={`${stylesHeader.iconMessenger}`}
              >
                <img
                  src={logoTelegram}
                  alt='иконка ссылки на Telegram'
                />
              </a>
            </li>
          </ul>
          <a href='tel:+7(988)-311-77-88' className={stylesHeader.phoneNumber}>
            +7(988)-311-77-88
          </a>
          <Button type='transparentWhite'>Заказать звонок</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
