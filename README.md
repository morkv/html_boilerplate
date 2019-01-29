# static-site-webpack-habr

## Использование

1.`Node.js`.


## Structure

### 1. Homepage

### 2. Images
#### 1. Шлях Картинки

1. 
    Формати:
      BMP, TIFF, TGA, ICO;
      JPEG, JPEG 2000, JPEG XR;
        RGB => YUV
        Progressive JPEG = ????

        JPEG 2000 => apple => Safari & iOS Safari;
        JPEG XR => microsoft => IE & Edge;
      
      [img]

      <img srcset="rit-320w.jpg 320w,
                    rit-480w.jpg 480w,
                    rit-800w.jpg 800w"
            sizes="(max-width: 320px) 280px,
                  (max-width: 480px) 460px,
                  800px"
            src="rit-800.jpg" alt="Hello, World!">

            srcset - задаємо кожному розміру своє зображення;
            sizes - вичисляємо розмір, котрий потрібно примінити;
            вибираємо з srcset найпідходяще по розміру зображення;
        
      [picture]
        Polifill = [https://www.npmjs.com/package/picturefill](https://www.npmjs.com/package/picturefill);
        npm i picturefill
      <picture>
        <source type="image/webp" media="(min-width: 1150px)"
                srcset="rit-desktop@1x.webp 1x, rit-desktop@2x.webp 2x">
        <source type="image/webp"
                srcset="rit-mobile@1x.webp 1x, rit-mobile@2x.webp 2x">
        <source media="(min-width: 1150px)"
                srcset="rit-desktop@1x.webp 1x, rit-desktop@2x.webp 2x">
        <img src="rit-mobile@1x.jpg"
             srcset="rit-mobile@2x.jpg 2x"
             alt="Hello, Rit!" width="20" height="18">
      </picture>
      
      

      PNG, APNG;
        PNG => якщо потрібна напівпрозорість;
      GIF;
        GIF => MP4 & WebM: [https://www.ffmpeg.org/](https://www.ffmpeg.org/);
        Вставка:

      <video width="400" heigh="300"
              autoplay loop muted playsinline>
        <source src="kitty.webm" type="video/webm">
        <source src="kitty.mp4" type="video/mp4">
        <img src="kitty.gif" width="400" heigh="300">
      </video>
          

      WebP;
        !!! Google => can i use => just chrome;
      SVG;
        
      FLIP, BPG, HEIF;
    Інструменти:
      Guetzli: [https://github.com/google/guetzli](https://github.com/google/guetzli);
        - для статичних сайтів;
        - важлива якість;
        - не шкода оперативки;
      MozJPEG: [https://github.com/mozilla/mozjpeg](https://github.com/mozilla/mozjpeg);
        - для динамічних сайтів;
        - важлива скорість;
        - контроль над настройками;
<!-- [Images](https://raw.githubusercontent.com/Harrix/static-site-webpack-habr/master/docs/img/thumbnail.png) -->

2.  2dppx

    // якщо браузер не знає тих виразів
    .rit {
      backgroung-image: url('img/rita@1x.jpg');
    }
    
    // якщо браузер знає такі вирази
    @media (-webkit-min-device-pixel-ratio: 2),
           (min-resolution: 192dpi),
           (min-resolution: 2dppx)
           {
             .rit {
               background-image: url('img/rita@2x.jpg')
             }
           }
            
3.  intersection observer polyfill: [https://github.com/w3c/IntersectionObserver/tree/master/polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill);
    npm install intersection-observer

    SQIP - SVG-Based Image Placeholder: [https://github.com/technopagan/sqip](https://github.com/technopagan/sqip);



#### Special src for video layout image from youtube
src="https://i.ytimg.com/vi/VIDEOID!!!!/maxresdefault.jpg"

