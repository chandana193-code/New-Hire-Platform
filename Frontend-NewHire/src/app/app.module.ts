import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { PostVacancyComponent } from './post-vacancy/post-vacancy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { AtsCheckerComponent } from './ats-checker/ats-checker.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { HomeComponent } from './home/home.component';

import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewJobDescriptionComponent } from './view-job-description/view-job-description.component';
import { InterviewScheduleComponent } from './interview-schedule/interview-schedule.component';
import { InterviewComponent } from './interview/interview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JobSearchComponent,
    PostVacancyComponent,
    FormsComponent,
    JobDescriptionComponent,
    AtsCheckerComponent,
    HeaderSectionComponent,
    HomeComponent,
   HeaderSectionComponent,
    AtsCheckerComponent,
    DataprivacyComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent,
    ViewJobDescriptionComponent,
    InterviewScheduleComponent,
    InterviewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
