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
      (infoConfig["name"] || undefined) !== "" &&
      (infoConfig["name"] || undefined) !== null &&
      (infoConfig["name"] || undefined) !== undefined
        ? infoConfig["name"] || undefined
        : profile.name;

    profile.description =
      profile.description === undefined &&
      (infoConfig["bio"] || undefined) !== "" &&
      (infoConfig["bio"] || undefined) !== null &&
      (infoConfig["bio"] || undefined) !== undefined
        ? infoConfig["bio"] || undefined
        : profile.description;

    profile.availability =
      profile.availability === undefined &&
      (infoConfig["availability"] || undefined) !== null &&
      (infoConfig["availability"] || undefined) !== undefined
        ? infoConfig["availability"] || undefined
        : profile.availability;

    profile.location =
      profile.location === undefined &&
      (infoConfig["location"] || undefined) !== "" &&
      (infoConfig["location"] || undefined) !== null &&
      (infoConfig["location"] || undefined) !== undefined
        ? infoConfig["location"] || undefined
        : profile.location;

    profile.imgUrl =
      profile.imgUrl === undefined &&
      (infoConfig["avatar_url"] || undefined) !== "" &&
      (infoConfig["avatar_url"] || undefined) !== null &&
      (infoConfig["avatar_url"] || undefined) !== undefined
        ? infoConfig["avatar_url"] || undefined
        : profile.imgUrl;

    profile.githubUsername =
      profile.githubUsername === undefined &&
      (infoConfig["githubUsername"] || undefined) !== "" &&
      (infoConfig["githubUsername"] || undefined) !== null &&
      (infoConfig["githubUsername"] || undefined) !== undefined
        ? infoConfig["githubUsername"] || undefined
        : profile.githubUsername;

    profile.email =
      profile.email === undefined &&
      (infoConfig["email"] || undefined) !== "" &&
      (infoConfig["email"] || undefined) !== null &&
      (infoConfig["email"] || undefined) !== undefined
        ? infoConfig["email"] || undefined
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
