import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileStandalonePageComponent } from "./components/profile-standalone-page/profile-standalone-page.component";
import { ProfileProjectsPageComponent } from "./components/profile-projects-page/profile-projects-page.component";

const routes: Routes = [
  { path: "", component: ProfileStandalonePageComponent },
  {
    path: "projects",
    component: ProfileProjectsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
