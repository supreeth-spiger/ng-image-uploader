import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from '../service';

@Component({
  selector: 'app-Image-upload',
  templateUrl: './Image-upload.component.html',
  styleUrls: ['./Image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(private fileUploadService: FileUploaderService) {

  }

  ngOnInit() {

  }

  // object 
  objUrl = '';
  selectedObjFile = null;
  onSelectObjFile(event) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.selectedObjFile = event.target.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e: any) => { // called once readAsDataURL is completed
        this.objUrl = e.target.result;
        // console.log(this.objUrl);
      }
    }
  }


// scene 
sceneUrl = '';
  selectedSceneFile = null; 
  onSelectSceneFile(event) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.selectedObjFile = event.target.files[0];
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e: any) => { // called once readAsDataURL is completed
        this.sceneUrl = e.target.result;
        // console.log(this.sceneUrl);
      }
    }
  }


  upload() {
    var object = {
      "objImage": this.objUrl,
      // "objFilename" : this.selectedObjFile.name,
      "sceneImage" : this.sceneUrl,
    //  "sceneFilename" : this.onSelectSceneFile.name
    }
   
    
    
    this.fileUploadService.fileUpload(object).subscribe(
      (fileData: any) => {
        console.log(`Response data : ${fileData}`);
      },
      err => {
        console.log("Error occured", err);
      })
  }

}
