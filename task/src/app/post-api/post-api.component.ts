  import { CommonModule } from '@angular/common';
  import { HttpClient } from '@angular/common/http';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-post-api',
    standalone: true,
    imports: [
      PostApiComponent,
      CommonModule,
      FormsModule,
    ],
    templateUrl: './post-api.component.html',
    styleUrl: './post-api.component.css'
  })


  export class PostApiComponent {
    searchById: number = 1;
    searchApiUrl: string = 'https://jsonplaceholder.org/users?id=';
    postApiUrl: string = 'https://jsonplaceholder.org/users';
    updateApiUrl: string = 'https://jsonplaceholder.org/users/';
    deleteApiUrl: string = 'https://jsonplaceholder.org/users/'; 
    formData: any = {
      firstname: 'mudasir',
      lastname: 'mudasir',
      id: 0,
    };

    
    searchedData: any[] = [];
    searchLoading: boolean = false;
    postLoading: boolean = false;
    updateLoading: boolean = false;
return: any;


    constructor(private http: HttpClient) {      
      // this.getAllUsers();
    }



  postUser() {
    this.postLoading = true;
    this.http.post(this.postApiUrl, this.formData).subscribe((res: any) => {
      console.log(res);
      this.postLoading = false;
      alert('Data Posted Successfully:\n' + 'ID: ' + res.id + '\nFirst Name: ' + res.firstname + '\nLast Name: ' + res.lastname);
    }, (error) => {
      console.log(error);
      this.postLoading = false;
    });
  }




  // searchUser() {
  //   this.searchLoading = true;
  //   this.http.get(this.searchApiUrl + this.searchById).subscribe((res: any) => {
  //     console.log(res);
  //     setTimeout(() => {
  //       this.searchedData = res == null ? [] : Array.isArray(res) ? res : [res];
  //       // this.searchedData = res;
  //       console.log(this.searchedData);
        
  //       this.searchedData = Array.isArray(res) ? res : [res];
  //       this.searchLoading = false;
  //     }, 1000);
  //   }, (error) => {
  //     console.error('Error fetching data', error);
  //     this.searchLoading = false;
  //     alert('Error fetching data:\n' + error.message + '. Please try again with a valid URL.');
  //   });
  // } 

  searchUser() {
    this.searchLoading = true;
    this.http.get(this.searchApiUrl + this.searchById).subscribe((res: any) => {
        console.log(res);
        setTimeout(() => {
          this.searchedData = res == null ? [] : Array.isArray(res) ? res : [res];
          console.log(this.searchedData);
          this.searchLoading = false;
        }, 1000);
      }, (error) => {
        console.error('Error fetching data', error);
        this.searchLoading = false;
        alert('Error fetching data:\n' + error.message + '. Please try again with a valid URL.');
      });
  }
  




  onEdit(data: any) {
    this.formData = data;
  }


  updateUser() {
    this.updateLoading = true;
    this.http.put(this.updateApiUrl + this.formData.id, this.formData).subscribe((res: any) => {
      console.log(res);
      this.updateLoading = false;
      alert('Data Updated Successfully:\n'  + 'ID: ' + res.id + '\nFirst Name: ' + res.firstname + '\nLast Name: ' + res.lastname);
    }, (error) => {
      console.log(error);
      this.updateLoading = false;
    });
  }


  onDelete(data: number) {
    if (confirm('Are u sure want to remove this data')) {
      
      console.log(data);
      console.log(this.deleteApiUrl + data);
      
      this.http.delete(this.deleteApiUrl + data).subscribe((res: any) => {
        console.log(res);
        if (res) {
          alert('Data Deleted Successfully:\n' + 'ID: ' + res.id + '\nFirst Name: ' + res.firstname + '\nLast Name: ' + res.lastname);
        } else {
          alert('Data Deletion Failed');
        }
      }, (error) => {
        console.log(error);
      });
    }
  }


}
