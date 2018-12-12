import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable()
export class FileUploaderService {
    private uploadURL = 'http://localhost:4500/api/home/';

    constructor(private http: HttpClient) {

    }

    fileUpload(data) {
        console.log("data",data)
        return this.http.post(this.uploadURL, data);
    }

}
