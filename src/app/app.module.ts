import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';

import { LyButtonModule } from '@alyle/ui/button';
import { LyIconModule } from '@alyle/ui/icon';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyGridModule } from '@alyle/ui/grid';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { CustomMinimaLight } from './app.theming';
import { ProjectsComponent } from './components/projects/projects.component';
import { LyCardModule } from '@alyle/ui/card';
import { ProfileStandalonePageComponent } from './components/profile-standalone-page/profile-standalone-page.component';
import { ProfileProjectsPageComponent } from './components/profile-projects-page/profile-projects-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    ProfileStandalonePageComponent,
    ProfileProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    LyButtonModule,
    LyIconModule,
    LyTypographyModule,
    LyAvatarModule,
    LyGridModule,
    LyCardModule
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: CustomMinimaLight, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
