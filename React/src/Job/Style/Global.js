import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
:root {
  --ColGrey: #e0e0e0;
  --ColDarkBlue : #022D50;
  --ColLightBlue : #029AFE;
  --ColOne : #FDFDFF;
  --ColTwo : #CCEDFF;
  --ColThree : #02FFFE;
  --ColFour : #029AFE;

  
}
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
*:focus {
    outline: none;
} 

html {
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
    font-family: 'Poppins', sans-serif;

    @include respond(tab-land) { // width < 1200?
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @include respond(tab-port) { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }
    
    @include respond(big-desktop) {
        font-size: 75%; //1rem = 12, 12/16
    }
}

body {
    box-sizing: border-box;
    

    @include respond(tab-port) {
        padding: 0;
    }
}

`
