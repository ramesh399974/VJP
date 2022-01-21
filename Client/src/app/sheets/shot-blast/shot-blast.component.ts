import { Component, OnInit } from '@angular/core';
export interface type{
  id:any
}
@Component({
  selector: 'app-shot-blast',
  templateUrl: './shot-blast.component.html',
  styleUrls: ['./shot-blast.component.css']
})
export class ShotBlastComponent implements OnInit {
  title:any;
  opnValue :any;
  constructor() { }
  arr = new Array(682)
  ngOnInit(): void {
   this.opnValue = localStorage.getItem('opnValue');
   if(this.opnValue==140){
     this.title ='GDC SHIFT WISE SHOT BLASTING DETAILS';
   }else if (this.opnValue==110){
     this.title ="GDC SHIFT WISE BEND REMOVING DETAILS"
   }else if (this.opnValue==80){
    this.title ="GDC SHIFT WISE CUTTING DETAILS"
  }else if (this.opnValue==90){
    this.title ="GDC SHIFT WISE BEND FETTLING DETAILS"
  }
  }
  printPage() {

    const printContent = document.getElementById("componentID");
    const WindowPrt = window.open('', '', 'left=10,top=10,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.write(`<style> 
      
      div{
        padding:5%
      }
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        
      }
      th, td {
        padding: 2px;
        
        font-size:10px;
      }
      .bottomBorder {
        border-bottom-color: transparent;
      }
      .rightBorder {
        border-right-color: transparent;
      }
      .leftBorder{
        border-top-color : transparent;
      }
      * {box-sizing: border-box}
      body, html {
        height: 100%;
        margin: 0;
        font-family: Arial;
        
      }
      .tablink {
        background-color: #555;
        color: white;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 5px 10px;
        font-size: 17px;
        width: 15%;
      }
      .tablink:hover {
        background-color: #777;
      }
      .tabcontent {
        color: black;
        display: none;
        padding: 50px 20px;
        height: 100%;
      }
      .bg {
      background-color:transparent;
      color: rgb(192, 192, 192);
      font-size: 40px;
      text-align: center;
      }
      .bg-text
      {
      color:lightgrey;
      font-size:40px;
      transform:rotate(300deg);
      -webkit-transform:rotate(300deg); 
    }
    tr.noBorder td {
      border: 0;
      height: 30px;
    }
  vertical_head{
    text-align: left; 
  }
  tr.bot td{
    border-bottom:none;
  }
  .text_for {
    text-align: center;
  }
      </style>`);


    setTimeout(function () {
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
    }, 800);
  }
}
