import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { DBService } from '@shared/services/db.service';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  db = inject(DBService);
    localStorage = inject(LocalStorageService);

  constructor() { }

  updateUser(user: Partial<IUser>) {
    this.db.user.update((prev) => {
      return {...prev,...user};
    });
    this.localStorage.setUser(this.db.user());
  }
}
