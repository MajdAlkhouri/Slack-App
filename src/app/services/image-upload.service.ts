import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private storage: AngularFireStorage) {}

  uploadImage(image: File, path: string): Observable<string> {
    const uploadTask = this.storage.upload(path, image);
    return uploadTask
      .snapshotChanges()
      .pipe(switchMap((result) => result.ref.getDownloadURL()));
  }
}
