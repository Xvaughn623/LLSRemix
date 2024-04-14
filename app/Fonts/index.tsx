import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "custom-heading";
        font-style: normal;
        font-weight: 700;
        src: local('Sisterhood'),
        url("./fonts/Sisterhood.ttf") format("truetype");
      }
    `}
  />
);

export { Fonts };
