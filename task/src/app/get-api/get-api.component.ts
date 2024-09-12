import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  getApiUrl: string = 'https://jsonplaceholder.org/users';
  dataList: any [] = [];
  loading: boolean = false;



  constructor(private http: HttpClient) { 
    // this.getAllUsers();
  }


  getAllUsers() {
    this.loading = true;  // Set loading to true when the request starts
    this.http.get(this.getApiUrl).subscribe((res: any) => {
      console.log(res);
      setTimeout(() => {
        this.dataList = res;
        this.loading = false;
      }, 2000);
    }, (error) => {
      console.error('Error fetching data', error);
      this.loading = false;  // Ensure loading is false even if an error occurs
      alert('Error fetching data:\n' + error.message + '. Please try again with a valid URL.');
        this.loading = false;
    });
  }

}
