import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Fraktion Mono';
        src: url('./fonts/Mono/PPFraktionMono-Regular.otf') format("opentype");

      }
      /* latin */
      @font-face {
        font-family: 'FraktionSans-LightItalic';
        src: url('./fonts/Sans/PPFraktionSans-LightItalic.otf') format("opentype");

      }
      `}
  />
)

export default Fonts