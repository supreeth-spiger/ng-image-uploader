import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './Image-upload.component';
import { ImageUploadRoutingModule } from './Image-upload-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploaderService } from '../service';
@NgModule({
    imports: [
        CommonModule,
        ImageUploadRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        ImageUploadComponent
    ],
    providers : [FileUploaderService]
})

export class ImageUploadModule { }