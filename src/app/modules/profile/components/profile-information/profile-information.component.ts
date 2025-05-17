import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserApiService } from '@modules/profile/services/user-api.service';
import { DBService } from '@shared/services/db.service';

@Component({
  selector: 'app-profile-information',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent implements OnInit {
  fb = inject(FormBuilder);
  db = inject(DBService);
  userFrom!: FormGroup;

  userApi=inject(UserApiService);

  ngOnInit(): void {
    const user = this.db.user();
    this.userFrom = this.fb.group({
      name: [user.name],
      email: [user.email, [Validators.required, Validators.email]],
      preferredCategories: [user.preferences.preferredCategories.join(',')],    // Also can handle by from array
      notifications: [user.preferences.notifications]
    })
  }

  onSubmit() {
    if (this.userFrom.invalid) {
      console.warn("INvalid")
    }

    const fromData = this.userFrom.value;
    const newUserData = {
      name: fromData.name,
      email: fromData.email,
      preferences: {
        preferredCategories: fromData.preferredCategories.split(",").map((item: string) => item.trim()),
        notifications:fromData.notifications
      }
    }
    this.userApi.updateUser(newUserData);
  }

}
