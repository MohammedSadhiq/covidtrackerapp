import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/services/data-services.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit{

  constructor(private _serv:DataServicesService)  { }

  LineChart = [];
  LineChart1=[];
  TotalonDay = [];
Dates = [];
Mystat:any;
testStats=[];
casesnTests =[];
TotalTests =[];

testDates =[];
  ngOnInit() {
    this._serv.indHist().subscribe(
(response)=>{

  this.Mystat = response.data;
  for(let i = 0; i<this.Mystat.length;i++)
  {
   this.Dates.push(this.Mystat[i].day);
   this.TotalonDay.push(this.Mystat[i].summary.total);
  }


  this.LineChart = new Chart('lineChart', {
    type: 'line',
  data: {
   labels: this.Dates,
   datasets: [{
       label: 'Number of Confirmed Cases ',
       //data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
       data:this.TotalonDay,
       fill:true,
       lineTension:0.2,
       borderColor:"yellow",
       pointBackgroundColor:"orange",
       borderWidth: 0.1
   }]
  }, 
  options: {
    responsive : true,
          maintainAspectRatio : false,
   title:{
       text:"Line Chart",
       display:true
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero:true
           }
       }]
   }
  }
  });
  

}
    );

    this._serv.testHist().subscribe(
      (response)=>{
        this.testStats = response.data;

        for(let i=0;i<this.testStats.length;i++){
          
          this.testDates.push(this.testStats[i].day);
          this.TotalTests.push(this.testStats[i].totalSamplesTested);
          this.casesnTests.push(this.testStats[i].totalPositiveCases);
        }
       

        this.LineChart1 = new Chart('lineChart1', {
          type: 'line',
        data: {
         labels: this.testDates,
         datasets: [{
             label: 'Number of Tests performed ',
             //data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
             data:this.TotalTests,
             fill:true,
             lineTension:0.8,
             pointBackgroundColor:"orange",
             borderColor:"yellow",
             borderWidth: 0.2
         }]
        }, 
        options: {
          responsive : true,
          maintainAspectRatio : false,
         
         title:{
             text:"Line Chart",
             display:true
         },
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
        }
        });
        

      }
    );




  }


  ngAfterViewInit(){
    console.log(this.Dates);
    //console.log(this.testStats);
    console.log( this.TotalTests);
    console.log(this.testDates);  
}
}

