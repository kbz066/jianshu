import {
  createGlobalStyle
} from 'styled-components'


export const IconFont = createGlobalStyle`


@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1551451593213'); /* IE9 */
  src: url('iconfont.eot?t=1551451593213#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1551451593213') format('woff'),
  url('iconfont.ttf?t=1551451593213') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1551451593213#iconfont') format('svg'); /* iOS 4.1- */
}


  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .homeicon{
    font-family: "iconfont" !important;
    font-size: 28px;
    vertical-align:-0.15em;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`
