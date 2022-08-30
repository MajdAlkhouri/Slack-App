import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { filter, finalize, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  constructor(private storage: AngularFireStorage) {}

  uploadImage(image: File, path: string): Observable<string> {
    const uploadTask = this.storage.upload(path, image);
    return uploadTask.snapshotChanges().pipe(
      filter((task) => task.state === 'success'),
      switchMap((result) => result.ref.getDownloadURL())
    );
  }
}
