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
    profile.name = infoConfig.name;
    profile.description = infoConfig.bio;
    profile.availability = infoConfig.availability;
    profile.location = infoConfig.location;
    profile.imgUrl = infoConfig.avatar_url;
    profile.githubTag = infoConfig.githubTag;
    profile.email = infoConfig.email;
  }

  getLinks(links: ProfileLink): void {
    links.github = infoConfig.links.github;
    links.instagram = infoConfig.links.instagram;
    links.lnkedin = infoConfig.links.lnkedin;
    links.telegram = infoConfig.links.telegram;
  }

  getProjects(): Project[] {
    return infoConfig.projects;
  }
}
