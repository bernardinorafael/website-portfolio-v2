import "styled-components"
import { dark, light } from "../css/themes/theme"

type ThemeDark = typeof dark
type ThemeLight = typeof light

declare module "styled-components" {
  export interface DefaultTheme extends ThemeDark, ThemeLight {}
}
