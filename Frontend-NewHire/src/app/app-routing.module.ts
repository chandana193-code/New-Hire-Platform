import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { PostVacancyComponent } from './post-vacancy/post-vacancy.component';
import { FormsComponent } from './forms/forms.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { InterviewComponent } from './interview/interview.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ViewJobDescriptionComponent } from './view-job-description/view-job-description.component';
import { InterviewScheduleComponent } from './interview-schedule/interview-schedule.component';

const routes: Routes = [
  
  {path:'header', component: HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'job-search', component: JobSearchComponent},
  {path:'post-vacancy', component: PostVacancyComponent},
  {path:'form',component:FormsComponent},
  {path:'job-description', component:JobDescriptionComponent},
  {path:'view-job-description', component:ViewJobDescriptionComponent},
   {path:"", component:HeaderSectionComponent},
  {path:"interview", component:InterviewComponent},
  // { path: '', component: FormsComponent },
  { path: 'message', component:MessageComponent },
  {path:'dataprivacy',component:DataprivacyComponent},

  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path:'interview',component:InterviewComponent},
  {path:'interviewSchedule',component:InterviewScheduleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
