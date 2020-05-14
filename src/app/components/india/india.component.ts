import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  constructor(private _service:DataServicesService) { }
  PieChart=[];

  indlatest:any;
 indTotal:any;
 indDischarged:any;
 indDeaths:any;

  ngOnInit() {
    this._service.inddatalat().subscribe(
      (response)=>{
       // console.log(response.data);
      // const newData= JSON.stringify(response.data);
      //this.indlatest = JSON.parse(newData);
        //console.log(this.indlatest);
       // const data2 = response.data
       this.indlatest = response;
    //console.log(data2.data.regional[1].loc);
    console.log(this.indlatest);
    this.indTotal = this.indlatest.data.summary.total;
    this.indDischarged = this.indlatest.data.summary.discharged;
    this.indDeaths = this.indlatest.data.summary.deaths;
    console.log('data'+this.indlatest.data.regional.length);
   // this.indlatest = response;


   this.PieChart = new Chart('pieChart', {
    type: 'pie',
  data: {
   labels: ["Total Cases", "Discharged", "Deaths"],
   datasets: [{
       label: '# of Votes',
       data: [
        this.indTotal,
        this.indDischarged ,
        this.indDeaths
        ],

       backgroundColor: [
           'rgba(	244, 196, 48)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)'
          
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)'
          
       ],
       borderWidth: 1
   }]
  }, 
  options: {
    responsive : true,
          maintainAspectRatio : false,
   title:{
       text:"Bar Chart",
       display:false
   }
   /*scales: {
       yAxes: [{
           ticks: {
               beginAtZero:true
           }
       }]
   }*/
  }
  });
  

      }
    )


    
  }

}
