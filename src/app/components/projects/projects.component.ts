import { Component, OnInit } from '@angular/core';
import { shadowBuilder, LyTheme2, ThemeVariables } from '@alyle/ui';
import { ConfigReaderService } from 'src/app/services/config-reader.service';
import { Project } from 'src/app/models/Project';

const styles = (theme: ThemeVariables) => ({
  projectCard: {
    background: theme.background.default,
    boxShadow: '9px 9px 9px #cbcaca, -9px -9px 9px #ffffff',
    borderRadius: '25px',
    margin: '1rem'
  },
  projectCardHeadline: {
    textDecoration: 'underline',
    marginTop: '0px',
    wordBreak: 'break-word'
  },
  languageTitle: {
    textAlign: 'right',
    marginBottom: '20px'
  },
  languageTitleComponent: {
    display: 'inline',
    verticalAlign: 'middle',
    wordBreak: 'break-word'
  },
  projects: {
    margin: '1em'
  }
});

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  projects: Project[];

  public truncate(text: string): string {
    if (text.length > 180) {
      for (let i: number = 180; i > 0; i--) {
        if (text.slice(i) === '.') {
          text = text.slice(0, i);
          text += '..';
          break;
        } else if (text.slice(i) === ' ') {
          continue;
        } else {
          text = text.slice(0, i);
          text += '...';
          break;
        }
      }
    }
    return text;
  }

  constructor(
    private theme: LyTheme2,
    private configReaderService: ConfigReaderService
  ) {}

  ngOnInit(): void {
    this.projects = this.configReaderService.getProjects();
  }

  openTab(link: string): void {
    window.open(link);
  }
}
