import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private _serv:DataServicesService) { }
contactdata:any=[];
  ngOnInit() {

    this._serv.contacts().subscribe(
      (response) =>{
          this.contactdata = response.data;
          console.log(this.contactdata);
      }
    );
  }

}
