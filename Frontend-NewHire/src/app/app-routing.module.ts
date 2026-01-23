import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { PostVacancyComponent } from './post-vacancy/post-vacancy.component';
import { FormsComponent } from './forms/forms.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { InterviewComponent } from './interview/interview.component';
import { MessageComponent } from './message/message.component';

import { DataprivacyComponent } from './dataprivacy/dataprivacy.component';


const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'job-search', component: JobSearchComponent},
  {path:'post-vacancy', component: PostVacancyComponent},
  {path:'form',component:FormsComponent},
  {path:'job-description', component:JobDescriptionComponent},
  {path:"", component:HeaderSectionComponent},
  {path:"interview", component:InterviewComponent},
  { path: 'job-search', component: JobSearchComponent },
  { path: 'post-vacancy', component: PostVacancyComponent },
  { path: '', component: FormsComponent },
  { path: 'job-description', component: JobDescriptionComponent },
  { path: 'message', component: MessageComponent },
  { path: 'interview', component: InterviewComponent },
  {path:'dataprivacy',component:DataprivacyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
