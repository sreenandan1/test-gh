import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private files: File[] = [];

  addFiles(newFile: FileList | File[]) {
    Array.from(newFile).forEach((file) => this.files.push(file));
  }

  getFiles() {
    return this.files;
  }
}
