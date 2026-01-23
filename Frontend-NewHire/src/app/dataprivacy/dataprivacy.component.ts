import { Component } from '@angular/core';

@Component({
  selector: 'app-dataprivacy',
  templateUrl: './dataprivacy.component.html',
  styleUrls: ['./dataprivacy.component.css']
})
export class DataprivacyComponent {
   consentLogs = [
    {
      purpose: 'Recruitment',
      submittedDate: 'Jan 08, 2026 12:43 PM',
      action: 'Agreed',
      policyUrl: '-',
      note: 'By submitting your application ...'
    },
    {
      purpose: 'Onboarding',
      submittedDate: 'Jan 08, 2026 12:43 PM',
      action: 'Agreed',
      policyUrl: '-',
      note: 'The information and documents ...'
    }
  ];
    tab: 'privacy' | 'consent' = 'privacy'; 

  constructor() {}

  ngOnInit(): void {
  
    this.tab = 'privacy';
  }
  activeTab: 'privacy' | 'consent' = 'consent';

  
}
