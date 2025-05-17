import { Component } from '@angular/core';
import { ProfileInformationComponent } from '@modules/profile/components/profile-information/profile-information.component';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileInformationComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
