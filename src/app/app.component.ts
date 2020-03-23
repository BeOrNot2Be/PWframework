import { Component } from "@angular/core";
import { LyTheme2, ThemeVariables } from "@alyle/ui";

const STYLES = (theme: ThemeVariables) => ({
  "@global": {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly classes = this.theme.addStyleSheet(STYLES);

  constructor(private theme: LyTheme2) {}
}
