import { Injectable } from "@angular/core";
import infoConfig from "../../assets/infoConfig.json";
import { Project } from "../models/Project";
import { Profile, ProfileLink } from "../models/Profile";

@Injectable({
  providedIn: "root"
})
export class ConfigReaderService {
  constructor() {}

  getProfile(profile: Profile): void {
    profile.name =
      profile.name === undefined &&
      infoConfig.name !== "" &&
      infoConfig.name !== null &&
      infoConfig.name !== undefined
        ? infoConfig.name
        : profile.name;

    profile.description =
      profile.description === undefined &&
      infoConfig.bio !== "" &&
      infoConfig.bio !== null &&
      infoConfig.bio !== undefined
        ? infoConfig.bio
        : profile.description;

    profile.availability =
      profile.availability === undefined &&
      infoConfig.availability !== null &&
      infoConfig.availability !== undefined
        ? infoConfig.availability
        : profile.availability;

    profile.location =
      profile.location === undefined &&
      infoConfig.location !== "" &&
      infoConfig.location !== null &&
      infoConfig.location !== undefined
        ? infoConfig.location
        : profile.location;

    profile.imgUrl =
      profile.imgUrl === undefined &&
      infoConfig.avatar_url !== "" &&
      infoConfig.avatar_url !== null &&
      infoConfig.avatar_url !== undefined
        ? infoConfig.avatar_url
        : profile.imgUrl;

    profile.githubUsername =
      profile.githubUsername === undefined &&
      infoConfig.githubUsername !== "" &&
      infoConfig.githubUsername !== null &&
      infoConfig.githubUsername !== undefined
        ? infoConfig.githubUsername
        : profile.githubUsername;

    profile.email =
      profile.email === undefined &&
      infoConfig.email !== "" &&
      infoConfig.email !== null &&
      infoConfig.email !== undefined
        ? infoConfig.email
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
      for (let inforsource of infoConfig.priority) {
        switch (inforsource) {
          case "profile":
            assignConfigInfo();
            break;

          case "github":
            assignServicesInfo("github");
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
