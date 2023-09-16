if (!customElements.get('media-gallery-ext')) {
  customElements.define(
    'media-gallery-ext',
    class MediaGalleryExt extends HTMLElement {
      constructor() {
        super();
        console.log('media-gallery-ext');
        const gallery = this.querySelector('.media-gallery');
        console.log(this);
        console.log(gallery);
        $(gallery).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
      }
    }
  );
}
