import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen-dialog',
  standalone: false,
  
  templateUrl: './full-screen-dialog.component.html',
  styleUrl: './full-screen-dialog.component.css'
})
export class FullScreenDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:{file:File}){}
  
  getImageUrl(file:File){
   return URL.createObjectURL(file)
  }

}
