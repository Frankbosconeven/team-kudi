import React from 'react'

const Ui = () => {
  return (
    <div className='justify-center flex'>
        <div class="w-full max-w-full px-3 text-center shrink-0 lg:flex-0 lg:w-6/12 xl:w-5/12">
            <h1>UI</h1>
    <img class="w-full mx-auto rounded-xl shadow-soft-3xl" src="https://images.unsplash.com/photo-1616627781431-23b776aad6b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1884&q=80" alt="chair"/>
    <div photo-swipe-gallery class="flex pt-2 mt-6" itemScope="" itemType="http://schema.org/ImageGallery">
      <figure class="px-1 mb-4" itemProp="associatedMedia" itemScope="" itemType="http://schema.org/ImageObject">
        <a href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg" itemProp="contentUrl" data-size="500x600">
          <img class="w-full shadow-soft-2xl min-h-25 max-h-25 rounded-xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg" alt="Image description" />
        </a>
      </figure>
      <figure class="px-1 mb-4" itemProp="associatedMedia" itemScope="" itemType="http://schema.org/ImageObject">
        <a href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg" itemProp="contentUrl" data-size="500x600">
          <img class="w-full shadow-soft-2xl min-h-25 max-h-25 rounded-xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg" itemProp="thumbnail" alt="Image description" />
        </a>
      </figure>
      <figure class="px-1 mb-4" itemProp="associatedMedia" itemScope="" itemType="http://schema.org/ImageObject">
        <a href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg" itemProp="contentUrl" data-size="500x600">
          <img class="w-full shadow-soft-2xl min-h-25 max-h-25 rounded-xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg" itemProp="thumbnail" alt="Image description" />
        </a>
      </figure>
      <figure class="px-1 mb-4" itemProp="associatedMedia" itemScope="" itemType="http://schema.org/ImageObject">
        <a href="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg" itemProp="contentUrl" data-size="500x600">
          <img class="w-full shadow-soft-2xl min-h-25 max-h-25 rounded-xl" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg" itemProp="thumbnail" alt="Image description" />
        </a>
      </figure>
    </div>
    <div class="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="inline-block px-8 py-2 mb-4 font-bold text-center text-black uppercase align-middle transition-all bg-white border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md pswp__button pswp__button--close">Close (Esc)</button>
            <button class="inline-block px-8 py-2 mb-4 font-bold text-center text-black uppercase align-middle transition-all bg-white border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md pswp__button pswp__button--fs">Fullscreen</button>
            <button class="inline-block px-8 py-2 mb-4 font-bold text-center text-black uppercase align-middle transition-all bg-white border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md pswp__button pswp__button--arrow--left">Prev
            </button>
            <button class="inline-block px-8 py-2 mb-4 font-bold text-center text-black uppercase align-middle transition-all bg-white border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md pswp__button pswp__button--arrow--right">Next
            </button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
         </div>
        </div>
  </div>
  )
}

export default Ui