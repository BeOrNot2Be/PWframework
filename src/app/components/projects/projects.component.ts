import { Component, OnInit } from "@angular/core";
import { shadowBuilder, LyTheme2, ThemeVariables } from "@alyle/ui";

const styles = (theme: ThemeVariables) => ({
  projectCard: {
    background: theme.background.default,
    boxShadow: "20px 20px 60px #cbcaca, -20px -20px 60px #ffffff",
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

  constructor(private theme: LyTheme2) {}

  ngOnInit(): void {}
}
