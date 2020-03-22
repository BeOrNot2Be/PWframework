import {
  LyThemeModule,
  LY_THEME,
  LY_THEME_GLOBAL_VARIABLES,
  PartialThemeVariables
} from "@alyle/ui";
import { color } from "@alyle/ui/color";

export class CustomMinimaLight implements PartialThemeVariables {
  name = "minima-light";
  background = {
    default: color(0xefeeee),
    secondary: color(0xefeeee)
  };
}
