import {Component, inject, OnInit,signal,computed,effect} from '@angular/core';
import { AppFileHandle } from './../../models/file_handle.model';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Index } from '../../models/index.model';



@Component({
  selector: 'app-index',
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  private sanitizer = inject(DomSanitizer);
  imagePreviews: (string | ArrayBuffer | null)[] = [];


     index: Index;
  constructor() {
    this.index = {
      Images: [],
    };
  }

  onImageSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle : AppFileHandle = {
      file: file,
      url: this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      )
    }
      this.index.Images.push(fileHandle);
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews.push(reader.result);
      };
        reader.readAsDataURL(file);
     }
  }

  removeImages(i:number){
      this.index.Images.splice(i,1);
    }


}
