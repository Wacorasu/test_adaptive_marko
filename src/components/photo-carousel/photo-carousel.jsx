import { useState } from 'react';
import Fancybox from '../../servicec/funcybox';
import stylesPhotoCarousel from './photo-carousel.module.scss';

export const PhotoCarousel = ({ alt, images, modifiedStyle = '' }) => {
  const [pointer, setPointer] = useState(0);
  const PHOTO_CAROUSEL_PREVIEW_LENGTH = 3;

  const changeImagePrevious = () => {
    if (pointer === 0) {
      setPointer(images.length - 1);
    } else setPointer(pointer - 1);
  };

  const changeImageNext = () => {
    if (pointer === images.length - 1) {
      setPointer(0);
    } else setPointer(pointer + 1);
  };

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
      modifiedStyle={`${stylesPhotoCarousel.fancyboxContainer} ${modifiedStyle}`}
    >
      <a
        data-fancybox='gallery'
        href={images[pointer].full}
        className={stylesPhotoCarousel.mainImageContainer}
      >
        <img
          className={stylesPhotoCarousel.mainImage}
          alt={alt}
          src={images[pointer].preview}
        />
      </a>

      <div className={stylesPhotoCarousel.previewContainer}>
        <div className={stylesPhotoCarousel.controlPanelContainer}>
          <button
            type='button'
            className={`${stylesPhotoCarousel.controlPanelButton} ${stylesPhotoCarousel.controlPanelButtonLeft} ${stylesPhotoCarousel.controlPanelButtonLeftMobile}`}
            onClick={changeImagePrevious}
            aria-label='button left'
          />
          <div className={stylesPhotoCarousel.controlPanelCounterContainer}>
            <span className={stylesPhotoCarousel.controlPanelCounterCurrent}>
              {pointer < 9 ? `0${pointer + 1}` : pointer + 1}
            </span>
            <span className={stylesPhotoCarousel.controlPanelCounterTotal}>
              {images.length}
            </span>
          </div>
          <div className={stylesPhotoCarousel.controlPanelButtonsContainer}>
            <button
              type='button'
              className={`${stylesPhotoCarousel.controlPanelButton} ${stylesPhotoCarousel.controlPanelButtonLeft}`}
              onClick={changeImagePrevious}
              aria-label='button left'
            />
            <button
              type='button'
              className={`${stylesPhotoCarousel.controlPanelButton}`}
              onClick={changeImageNext}
              aria-label='button right'
            />
          </div>
        </div>
        <div className={stylesPhotoCarousel.previewImagesContainer}>
          {images.map((item, index) => {
            if (pointer === images.length - 1) {
              return (
                <a
                  key={index}
                  className={`${stylesPhotoCarousel.previewImageContainer} ${
                    index > PHOTO_CAROUSEL_PREVIEW_LENGTH - 1
                      ? stylesPhotoCarousel.previewImageHide
                      : ''
                  }`}
                  data-fancybox='gallery'
                  href={item.full}
                >
                  <img
                    className={stylesPhotoCarousel.previewImage}
                    alt={alt}
                    src={item.preview}
                  />
                </a>
              );
            } else if (index !== pointer) {
              return (
                <a
                  key={index}
                  className={`${stylesPhotoCarousel.previewImageContainer} ${
                    index > pointer + PHOTO_CAROUSEL_PREVIEW_LENGTH ||
                    index < pointer
                      ? stylesPhotoCarousel.previewImageHide
                      : ''
                  }`}
                  data-fancybox='gallery'
                  href={item.full}
                >
                  <img
                    className={stylesPhotoCarousel.previewImage}
                    alt={alt}
                    src={item.preview}
                  />
                </a>
              );
            }
            return '';
          })}
        </div>
      </div>
    </Fancybox>
  );
};
