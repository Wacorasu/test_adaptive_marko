import { Button } from '../button/button';
import logo from '../../images/logo.svg';
import logoMap from '../../images/logo_yandex-map.svg';
import logoTelegram from '../../images/icons/icon_telegram.svg';
import logoWhatsapp from '../../images/icons/icon_whatsapp.svg';
import stylesHeader from './header.module.scss';
import { ButtonDropdown } from '../button-dropdown/button-dropdown';

export const Header = () => {
  const accordingContent = (
    <div
      className={`${stylesHeader.contactsContainer} ${stylesHeader.contactsContainerMobile}`}
    >
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
                className={stylesHeader.iconMessengerImage}
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
                className={stylesHeader.iconMessengerImage}
                alt='иконка ссылки на Telegram'
              />
            </a>
          </li>
        </ul>
        <a href='tel:+7(988)-311-77-88' className={stylesHeader.phoneNumber}>
          +7(988)-311-77-88
        </a>
        <Button
          typeStyle='transparentWhite'
          modifiedStyle={stylesHeader.button}
        >
          Заказать звонок
        </Button>
      </div>
    </div>
  );

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
        <div
          className={`${stylesHeader.contactsContainer} ${stylesHeader.contactsContainerDesktop}`}
        >
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
                    className={stylesHeader.iconMessengerImage}
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
                    className={stylesHeader.iconMessengerImage}
                    alt='иконка ссылки на Telegram'
                  />
                </a>
              </li>
            </ul>
            <a
              href='tel:+7(988)-311-77-88'
              className={stylesHeader.phoneNumber}
            >
              +7(988)-311-77-88
            </a>
            <Button
              typeStyle='transparentWhite'
              modifiedStyle={stylesHeader.button}
            >
              Заказать звонок
            </Button>
          </div>
        </div>
        <ButtonDropdown
          modifiedStyleMain={stylesHeader.accordingButtonContainer}
          modifiedStyleButton={stylesHeader.accordingButton}
          modifiedStyleText={stylesHeader.accordingText}
          modifiedStyleIcon={stylesHeader.accordingIcon}
          modifiedStyleIconOpen={stylesHeader.accordingIconOpen}
          accordingMode={true}
          accordingStyle={stylesHeader.accordingContainer}
          accordingContent={accordingContent}
        >
          Контакты
        </ButtonDropdown>
      </div>
    </header>
  );
};
