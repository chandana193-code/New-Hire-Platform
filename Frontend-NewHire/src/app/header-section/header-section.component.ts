import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent {

   profileImage: string | ArrayBuffer | null = null;

  onImageSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.profileImage = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

}
