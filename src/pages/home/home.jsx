import { ButtonDropdown } from '../../components/button-dropdown/button-dropdown';
import { Button } from '../../components/button/button';
import { ItemCard } from '../../components/item-card/item-card';
import { Pin } from '../../components/pin/pin';
import { CATALOG_CARDS_DATA, DROPDOWN_LIST_COLOR, DROPDOWN_LIST_PLANE, DROPDOWN_LIST_STYLE } from '../../servicec/constants';
import stylesHomePage from './home.module.scss';

export const HomePage = () => {
  return (
    <main className={stylesHomePage.contentContainer}>
      <section className={stylesHomePage.intoSection}>
        <h1 className={stylesHomePage.introTitle}>
          Изготовим роскошную дизайнерскую кухню
        </h1>
        <div className={stylesHomePage.introSubtitleContainer}>
          <div className={stylesHomePage.introSubtitleIcon} />
          <div className={stylesHomePage.introSubtitleTextContainer}>
            <span className={stylesHomePage.introSubtitleTextMain}>
              Цена на 12-24% ниже,
            </span>
            <span className={stylesHomePage.introSubtitleText}>
              чем у посредников
            </span>
          </div>
        </div>
        <div className={stylesHomePage.introButtonContainer}>
          <span className={stylesHomePage.introButtonLabel}>
            Рассчитаем стоимость кухни-мечты
          </span>
          <Button
            typeStyle='transparentWhite'
            modifiedStyle={stylesHomePage.introButton}
          >
            Заказать расчёт
          </Button>
          <div className={stylesHomePage.introButtonIcon} />
        </div>
        <Pin modifiedStyle={stylesHomePage.introPinTechnic}>
          Огромный выбор бытовой техники
        </Pin>
        <Pin modifiedStyle={stylesHomePage.introPinGarniture}>
          Изысканный гарнитур любого размера
        </Pin>
        <Pin modifiedStyle={stylesHomePage.introPinTable}>
          Выдающиеся сорта древесины
        </Pin>
      </section>
      <section className={stylesHomePage.advantagesSection}>
        <div className={stylesHomePage.advantagesTitleContainer}>
          <h2 className={stylesHomePage.advantagesTitle}>Наши преимущества</h2>
          <div className={stylesHomePage.advantagesTitleDecor} />
        </div>
        <div className={stylesHomePage.advantagesPointsContainer}>
          <div className={stylesHomePage.advantagesPointContainer}>
            <div
              className={`${stylesHomePage.advantagesPointIcon} ${stylesHomePage.advantagesPointIconKitchen}`}
            />
            <div className={stylesHomePage.advantagesPointTextContainer}>
              <span className={stylesHomePage.advantagesPointTextMain}>
                C 2000 г на рынке
              </span>
              <span className={stylesHomePage.advantagesPointText}>
                наши кухни выбрали 10 000+ семей
              </span>
            </div>
          </div>
          <div className={stylesHomePage.advantagesPointContainer}>
            <div
              className={`${stylesHomePage.advantagesPointIcon} ${stylesHomePage.advantagesPointIconCalendar}`}
            />
            <div className={stylesHomePage.advantagesPointTextContainer}>
              <span className={stylesHomePage.advantagesPointTextMain}>
                Сжатые сроки
              </span>
              <span className={stylesHomePage.advantagesPointText}>
                изготовление кухни <br/> от 20 дней
              </span>
            </div>
          </div>
          <div className={stylesHomePage.advantagesPointContainer}>
            <div
              className={`${stylesHomePage.advantagesPointIcon} ${stylesHomePage.advantagesPointIconProject}`}
            />
            <div className={stylesHomePage.advantagesPointTextContainer}>
              <span className={stylesHomePage.advantagesPointTextMain}>
                Дизайн проект
              </span>
              <span className={stylesHomePage.advantagesPointText}>
                бесплатно за 30 минут
              </span>
            </div>
          </div>
        </div>
        <div className={stylesHomePage.advantagesBackgroundImage} />
      </section>
      <section className={stylesHomePage.catalogSection}>
        <h2 className={stylesHomePage.catalogTitle}>Посмотрите наши работы</h2>
        <div className={stylesHomePage.catalogButtonsContainer}>
          <form className={stylesHomePage.catalogButtonsMenuContainer}>
            <ButtonDropdown dropdownList={DROPDOWN_LIST_PLANE}>
              планировка
            </ButtonDropdown>
            <ButtonDropdown dropdownList={DROPDOWN_LIST_STYLE}>стиль кухни</ButtonDropdown>
            <ButtonDropdown dropdownList={DROPDOWN_LIST_COLOR} modifiedStyleMain={stylesHomePage.catalogButtonColor}>цвет</ButtonDropdown>
          </form>
          <div className={stylesHomePage.catalogButtonsControlContainer}>
            <Button type='submit' typeStyle='transparentDark' disabled modifiedStyle={stylesHomePage.catalogButtonAccept}>применить</Button>
            <Button typeStyle='transparentDark' modifiedStyle={stylesHomePage.catalogButtonDecline}>сбросить</Button>
          </div>
        </div>
        <div className={stylesHomePage.catalogProductsContainer}>
            {CATALOG_CARDS_DATA?.length > 0 && CATALOG_CARDS_DATA.map((item, index)=><ItemCard dataCard={item} />) 
            }
        </div>
        <div className={stylesHomePage.catalogBackgroundDecor} />
      </section>
    </main>
  );
};
