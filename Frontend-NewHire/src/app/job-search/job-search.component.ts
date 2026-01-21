import { Component } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent {

  
  filters = [
'Jobs By Location',
'Jobs By Type',
'Jobs By Sector',
'Jobs By Gender',
'Jobs By Experience',
'Salary Range'
];


jobs = [
{
title: 'QUALITY CONTROLLER - TEXTILES',
role: 'Textile Designer - Handloom Jacquard',
company: 'MALLOW INTERNATIONAL',
lastDate: '20-01-2026',
salary: '15,000',
location: 'Karur',
sector: 'Textiles & Handlooms',
openings: 10,
category: 'Quality Controller'
},
{
title: 'DATA ENTRY',
role: 'Office Assistant',
company: 'MALLOW INTERNATIONAL',
lastDate: '25-01-2026',
salary: '12,000',
location: 'Karur',
sector: 'Admin',
openings: 5,
category: 'Data Entry'
}
];
}
