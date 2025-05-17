import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { DBService } from '@shared/services/db.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  localStorage = inject(LocalStorageService);
  db = inject(DBService);
  platformId = inject(PLATFORM_ID)

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const data = this.localStorage.getLocalStorageData();
      if (data) {
        this.db.courses.set(data.courses);
        this.db.user.set(data.user);
        this.db.enrollments.set(data.enrollments??[]);
      } else {
        this.localStorage.setCourseList(this.db.courses())
        this.localStorage.setUser(this.db.user())
      }
    }
  }

}
