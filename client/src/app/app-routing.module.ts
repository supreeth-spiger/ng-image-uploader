import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'imageuploader',
    loadChildren: 'src/app/Image-upload/Image-upload.module#ImageUploadModule'
  },
 
  {
    path: '',
    redirectTo: 'imageuploader',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
