import Fancybox from '../../servicec/funcybox';
import stylesItemCard from './item-card.module.scss';
import imagePreview from '../../images/section_03_sample-kitchen_preview.png';
import imageFull from '../../images/section_03_sample-kitchen.png';
import { useState } from 'react';

const data = {
  title: '',
  subTitle: '',
  priceEconomy: 168000,
  priceStandard: 217000,
  pricePremium: 270000,
  length: 4900,
  images: [
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
    { preview: imagePreview, full: imageFull },
  ],
};

export const ItemCard = () => {
  const [pointer, setPointer] = useState(0);

  return (
    <article className={stylesItemCard.container}>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
        modifiedStyle={stylesItemCard.fancyboxContainer}
      >
        <div className={stylesItemCard.carouselMainImageContainer}>
          <a data-fancybox='gallery' href={data?.images[pointer].full}>
            <img
              className={stylesItemCard.carouselMainImage}
              alt={data?.title}
              src={data?.images[pointer].preview}
            />
          </a>
        </div>
        <div className={stylesItemCard.carouselPreviewContainer}>
          <div className={stylesItemCard.carouselControlPanelContainer}>
            <div
              className={stylesItemCard.carouselControlPanelCounterContainer}
            >
              <span
                className={stylesItemCard.carouselControlPanelCounterCurrent}
              >
                {pointer + 1}
              </span>
              <span className={stylesItemCard.carouselControlPanelCounterTotal}>
                {data.images.length}
              </span>
            </div>
            <div
              className={stylesItemCard.carouselControlPanelButtonsContainer}
            >
              <button
                type='button'
                className={`${stylesItemCard.carouselControlPanelButton} ${stylesItemCard.carouselControlPanelButtonLeft}`}
              />
              <button
                type='button'
                className={`${stylesItemCard.carouselControlPanelButton} ${stylesItemCard.carouselControlPanelButtonRight}`}
              />
            </div>
          </div>
          <div className={stylesItemCard.carouselPreviewImagesContainer}>
            {data?.images.map((item, index) => {
              if (index > 0) {
                return (
                  <a
                    className={`${
                      stylesItemCard.carouselPreviewImageContainer
                    } ${
                      index > pointer + 3
                        ? stylesItemCard.carouselPreviewImageHide
                        : ''
                    }`}
                    data-fancybox='gallery'
                    href={item.full}
                  >
                    <img
                      className={stylesItemCard.carouselPreviewImage}
                      alt={data.title}
                      src={item.preview}
                    />
                  </a>
                );
              } else return '';
            })}
          </div>
        </div>
      </Fancybox>
    </article>
  );
};
