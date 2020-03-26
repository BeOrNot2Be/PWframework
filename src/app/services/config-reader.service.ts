import { Injectable } from '@angular/core';
import infoConfig from '../../assets/infoConfig.json';
import { Project } from '../models/Project';
import { Profile, ProfileLink } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ConfigReaderService {
  constructor() {}

  getProfile(profile: Profile): void {
    let fieldName: string;

    fieldName = 'name';

    profile.name =
      profile.name === undefined &&
      (infoConfig[fieldName] || undefined) !== '' &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.name;

    fieldName = 'bio';

    profile.description =
      profile.description === undefined &&
      (infoConfig[fieldName] || undefined) !== '' &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.description;

    fieldName = 'availability';

    profile.availability =
      profile.availability === undefined &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.availability;

    fieldName = 'location';

    profile.location =
      profile.location === undefined &&
      (infoConfig[fieldName] || undefined) !== '' &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.location;

    fieldName = 'avatar_url';

    profile.imgUrl =
      profile.imgUrl === undefined &&
      (infoConfig[fieldName] || undefined) !== '' &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.imgUrl;

    fieldName = 'githubUsername';

    profile.githubUsername =
      profile.githubUsername === undefined &&
      (infoConfig[fieldName] || undefined) !== '' &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.githubUsername;

    fieldName = 'email';

    profile.email =
      profile.email === undefined &&
      (infoConfig[fieldName] || undefined) !== '' &&
      (infoConfig[fieldName] || undefined) !== null &&
      (infoConfig[fieldName] || undefined) !== undefined
        ? infoConfig[fieldName] || undefined
        : profile.email;
  }

  getLinks(links: ProfileLink): void {
    links.github = infoConfig.links.github;
    links.instagram = infoConfig.links.instagram;
    links.lnkedin = infoConfig.links.lnkedin;
    links.telegram = infoConfig.links.telegram;
  }

  priorityProfileConfiguration(assignConfigInfo, assignServicesInfo): void {
    if (infoConfig.priority.length > 0) {
      for (const inforsource of infoConfig.priority) {
        switch (inforsource) {
          case 'profile':
            assignConfigInfo();
            break;

          case 'github':
            assignServicesInfo('github');
            break;

          default:
            break;
        }
      }
    } else {
      assignConfigInfo();
    }
  }

  getProjects(): Project[] {
    return infoConfig.projects;
  }
}
