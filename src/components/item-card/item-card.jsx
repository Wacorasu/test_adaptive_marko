import stylesItemCard from './item-card.module.scss';
import { PhotoCarousel } from '../photo-carousel/photo-carousel';
import { Button } from '../button/button';

export const ItemCard = ({dataCard}) => {
  return (
    <article className={stylesItemCard.container}>
      <PhotoCarousel
        images={dataCard.images}
        alt={dataCard.title}
        modifiedStyle={stylesItemCard.carousel}
      />
      <div className={stylesItemCard.contentContainer}>
        <h3 className={stylesItemCard.title}>{dataCard.title}</h3>
        <span className={stylesItemCard.subtitle}>{dataCard.subTitle}</span>
        <ul className={stylesItemCard.pricesContainer}>
          <li className={`${stylesItemCard.priceContainer}`}>
            <span
              className={`${stylesItemCard.priceName}  ${stylesItemCard.priceContainerEconomy}`}
            >
              Эконом
            </span>
            <span
              className={`${stylesItemCard.price}  ${stylesItemCard.priceContainerEconomy}`}
            >{`${dataCard.priceEconomy} р.`}</span>
          </li>
          <li
            className={`${stylesItemCard.priceContainer} ${stylesItemCard.priceContainerStandard}`}
          >
            <span className={stylesItemCard.priceName}>Стандарт</span>
            <span
              className={stylesItemCard.price}
            >{`${dataCard.priceStandard} р.`}</span>
          </li>
          <li
            className={`${stylesItemCard.priceContainer} ${stylesItemCard.priceContainerPremium}`}
          >
            <span
              className={`${stylesItemCard.priceName} ${stylesItemCard.priceContainerPremium}`}
            >
              Премиум
            </span>
            <span
              className={`${stylesItemCard.price} ${stylesItemCard.priceContainerPremium}`}
            >{`${dataCard.pricePremium} р.`}</span>
          </li>
        </ul>
        <span className={stylesItemCard.itemLength}>
          Длина кухни:{' '}
          <span className={stylesItemCard.itemLengthNumber}>
            {dataCard.length} мм
          </span>
        </span>
        <div className={stylesItemCard.buttonsContainer}>
          <Button typeStyle='dark' modifiedStyle={stylesItemCard.buttonDetails}>Подробнее</Button>
          <Button typeStyle='transparentDark' modifiedStyle={stylesItemCard.buttonPrice}>Расчет стоимости</Button>
        </div>
      </div>
    </article>
  );
};
