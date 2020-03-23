import { Component, OnInit } from "@angular/core";
import { shadowBuilder, LyTheme2, ThemeVariables } from "@alyle/ui";

const styles = (theme: ThemeVariables) => ({
  projectCard: {
    background: theme.background.default,
    boxShadow: "6px 6px 11px #cbcaca, -6px -6px 11px #ffffff",
    borderRadius: "25px"
  },
  projectCardHeadline: {
    textDecoration: "underline",
    marginTop: "0px"
  },
  languageTitle: {
    textAlign: "center"
  },
  languageTitleComponent: {
    display: "inline",
    verticalAlign: "middle"
  },
  projects: {
    margin: "1em"
  }
});

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  cardText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ipsa animi alias rem.";
  cardText2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  public truncate(text: string): string {
    if (text.length > 180) {
      for (let i: number = 180; i > 0; i--) {
        if (text.slice(i) == ".") {
          text = text.slice(0, i);
          text += "..";
          break;
        } else if (text.slice(i) == " ") {
          continue;
        } else {
          text = text.slice(0, i);
          text += "...";
          break;
        }
      }
    }
    return text;
  }

  constructor(private theme: LyTheme2) {}

  ngOnInit(): void {}
}
