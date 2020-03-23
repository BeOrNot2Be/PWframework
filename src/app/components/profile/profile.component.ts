import { Component, OnInit } from "@angular/core";
import { GithubProfile, Profile, ProfileLink } from "../../models/Profile";
import { ProfileService } from "../../services/profile.service";
import { LyIconService } from "@alyle/ui/icon";
import { shadowBuilder, LyTheme2, ThemeVariables } from "@alyle/ui";
import { DomSanitizer } from "@angular/platform-browser";
import { ConfigReaderService } from "src/app/services/config-reader.service";

const styles = (theme: ThemeVariables) => ({
  smbutton: {
    padding: "16px",
    textAlign: "center",
    background: theme.background.default,
    height: "100%",
    borderRadius: "50px",
    boxShadow: "6px 6px 11px #cbcaca, -6px -6px 11px #ffffff"
  },
  paper: {
    display: "block",
    position: "relative",
    margin: "1em",
    padding: "1em",
    background: theme.background.default,
    boxShadow: "6px 6px 11px #cbcaca, -6px -6px 11px #ffffff",
    borderRadius: "25px"
  },
  iconListItem: {
    display: "inline-flex"
  },
  githubTag: {
    color: "#ddd",
    fontWeight: 500,
    fontSize: "20px"
  },
  profileImage: {
    borderRadius: "20px!important"
  },
  profileElement: {
    position: "sticky",
    top: "20vh"
  }
});

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);

  profile: Profile = new Profile();
  links: ProfileLink = new ProfileLink();

  constructor(
    private profileService: ProfileService,
    private configReaderService: ConfigReaderService,
    private theme: LyTheme2,
    private icon: LyIconService,
    private sanitizer: DomSanitizer
  ) {
    icon.setSvg(
      "linkedin",
      sanitizer.bypassSecurityTrustResourceUrl(
        "./assets/socialmediaicons/045-linkedin"
      )
    );
    icon.setSvg(
      "github",
      sanitizer.bypassSecurityTrustResourceUrl(
        "./assets/socialmediaicons/038-github"
      )
    );
    icon.setSvg(
      "telegram",
      sanitizer.bypassSecurityTrustResourceUrl(
        "./assets/socialmediaicons/029-telegram"
      )
    );
    icon.setSvg(
      "instagram",
      sanitizer.bypassSecurityTrustResourceUrl(
        "./assets/socialmediaicons/025-instagram"
      )
    );
  }
  ngOnInit(): void {
    this.configReaderService.getProfile(this.profile);
    this.profileService.getProfile(this.profile);

    this.configReaderService.getLinks(this.links);
  }

  openTab(link: string): void {
    window.open(link);
  }
}
