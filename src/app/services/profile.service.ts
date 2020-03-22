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

  getProfile(profile: Profile, platform: string = "github"): void {
    switch (platform) {
      case "github":
        this.getGitHubProfile("beornot2be").subscribe(githubProfile => {
          profile.name = githubProfile.name;
          profile.description = githubProfile.bio;
          profile.availability = githubProfile.hireable;
          profile.location = githubProfile.location;
          profile.imgUrl = githubProfile.avatar_url;
          profile.githubTag = githubProfile.login;
        });
        profile.backgroundImgUrl =
          "https://images.unsplash.com/photo-1562683855-f85c2a6446b6?w=1701&q=80";
        break;

      default:
        this.getGitHubProfile("beornot2be").subscribe(githubProfile => {
          profile.name = githubProfile.name;
          profile.description = githubProfile.bio;
          profile.availability = githubProfile.hireable;
          profile.location = githubProfile.location;
          profile.imgUrl = githubProfile.avatar_url;
          profile.githubTag = githubProfile.login;
        });
        profile.backgroundImgUrl =
          "https://images.unsplash.com/photo-1562683855-f85c2a6446b6?w=1701&q=80";
        break;
    }
  }
}
