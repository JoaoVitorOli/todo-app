import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string,

    color: {
      card: string,
      background: string,
      text: string,
      hoverText: string,
      buttonTxtColor: string,
      shadow: string,
      borderBottomColor: string,
    }
  }
}
