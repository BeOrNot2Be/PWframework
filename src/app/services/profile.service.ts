import { Injectable } from '@angular/core';
import { Profile, GithubProfile } from '../models/Profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  fetchGithubUrl: string = 'https://api.github.com/users/';

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
      profile.name === undefined &&
      githubProfile.name !== '' &&
      githubProfile.name !== null &&
      githubProfile.name !== undefined
        ? githubProfile.name
        : profile.name;

    profile.description =
      profile.description === undefined &&
      githubProfile.bio !== '' &&
      githubProfile.bio !== null &&
      githubProfile.bio !== undefined
        ? githubProfile.bio
        : profile.description;

    profile.availability =
      profile.availability === undefined &&
      githubProfile.hireable !== null &&
      githubProfile.hireable !== undefined
        ? githubProfile.hireable
        : profile.availability;

    profile.location =
      profile.location === undefined &&
      githubProfile.location !== '' &&
      githubProfile.location !== null &&
      githubProfile.location !== undefined
        ? githubProfile.location
        : profile.location;

    profile.imgUrl =
      profile.imgUrl === undefined &&
      githubProfile.avatar_url !== '' &&
      githubProfile.avatar_url !== null &&
      githubProfile.avatar_url !== undefined
        ? githubProfile.avatar_url
        : profile.imgUrl;

    profile.githubUsername =
      profile.githubUsername === undefined &&
      githubProfile.login !== '' &&
      githubProfile.login !== null &&
      githubProfile.login !== undefined
        ? githubProfile.login
        : profile.githubUsername;

    profile.email =
      profile.email === undefined &&
      githubProfile.email !== '' &&
      githubProfile.email !== null &&
      githubProfile.email !== undefined
        ? githubProfile.email
        : profile.email;
  }

  private getUsername(profile: Profile, serviceUsername: string = ''): string {
    if (serviceUsername !== '') {
      return serviceUsername;
    } else {
      if (
        profile.githubUsername === undefined ||
        profile.githubUsername === null
      ) {
        throw new Error('No github username for fetching');
      } else {
        return profile.githubUsername;
      }
    }
  }

  getProfile(
    profile: Profile,
    service: string = 'github',
    serviceUsername: string = ''
  ): void {
    const username = this.getUsername(profile, serviceUsername);

    switch (service) {
      case 'github':
        this.getGitHubProfile(username).subscribe(githubProfile => {
          this.updateProfileWithGtihubData(profile, githubProfile);
        });
        break;

      default:
        this.getGitHubProfile(username).subscribe(githubProfile => {
          this.updateProfileWithGtihubData(profile, githubProfile);
        });
        break;
    }
  }
}
