import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { PostVacancyComponent } from './post-vacancy/post-vacancy.component';

const routes: Routes = [
  {path:'header', component: HeaderComponent},
  {path:'job-search', component: JobSearchComponent},
  {path:'post-vacancy', component: PostVacancyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
