import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-tn',
  templateUrl: './tn.component.html',
  styleUrls: ['./tn.component.css']
})
export class TnComponent implements OnInit {

  constructor(private _service:DataServicesService) { }
  PieChart=[];

  indlatest:any;
 tnTotal:any;
 tnDischarged:any;
 tnDeaths:any;

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
    this.tnTotal = this.indlatest.data.regional[26].totalConfirmed;
    this.tnDischarged = this.indlatest.data.regional[26].discharged;
    this.tnDeaths = this.indlatest.data.regional[26].deaths;
    console.log(this.tnTotal);
   // this.indlatest = response;


   this.PieChart = new Chart('pieChart', {
    type: 'pie',
  data: {
   labels: ["Total Cases", "Discharged", "Deaths"],
   datasets: [{
       label: '# of Votes',
       data: [
        this.tnTotal,
        this.tnDischarged ,
        this.tnDeaths
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
