import { Injectable } from "@angular/core";
import { Profile, GithubProfile } from "../models/Profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  fetchGithubUrl: string = "https://api.github.com/users/";

  constructor(private http: HttpClient) {}

  getGitHubProfile(githubUsername: string): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(
      `${this.fetchGithubUrl}${githubUsername}`
    );
  }

  private updateProfileWithGtihubData(
    profile: Profile,
    githubProfile: GithubProfile
  ): void {
    profile.name =
      profile.name !== undefined ? profile.name : githubProfile.name;
    profile.description =
      profile.description !== undefined
        ? profile.description
        : githubProfile.bio;
    profile.availability =
      profile.availability !== undefined
        ? profile.availability
        : githubProfile.hireable;
    profile.location =
      profile.location !== undefined
        ? profile.location
        : githubProfile.location;
    profile.imgUrl =
      profile.imgUrl !== undefined ? profile.imgUrl : githubProfile.avatar_url;
    profile.githubTag =
      profile.githubTag !== undefined ? profile.githubTag : githubProfile.login;
    profile.email =
      profile.email !== undefined ? profile.email : githubProfile.email;
  }

  getProfile(profile: Profile, platform: string = "github"): void {
    switch (platform) {
      case "github":
        this.getGitHubProfile("beornot2be").subscribe(githubProfile => {
          this.updateProfileWithGtihubData(profile, githubProfile);
        });
        profile.backgroundImgUrl =
          "https://images.unsplash.com/photo-1562683855-f85c2a6446b6?w=1701&q=80";
        break;

      default:
        this.getGitHubProfile("beornot2be").subscribe(githubProfile => {
          this.updateProfileWithGtihubData(profile, githubProfile);
        });
        profile.backgroundImgUrl =
          "https://images.unsplash.com/photo-1562683855-f85c2a6446b6?w=1701&q=80";
        break;
    }
  }
}
