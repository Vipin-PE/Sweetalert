import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sweetalert';

  showAlert() {
    Swal.fire({
      title: "Hello there!",
      text: "How is you ?",
      icon: "success",
      customClass: {
        popup: 'custom-popup',
      },
      confirmButtonColor: 'rgb(33, 187, 33)'
    });
  }
}
