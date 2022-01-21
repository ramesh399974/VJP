import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-periodic-calibration-report',
  templateUrl: './periodic-calibration-report.component.html',
  styleUrls: ['./periodic-calibration-report.component.css']
})
export class PeriodicCalibrationReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  printPage() {
    const printContent = document.getElementById("componentID");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.outerHTML);
    WindowPrt.document.write(`<style>   
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    .print-row {
      height: 25px;
    }
    th, td {
      padding: 2px;
      
      font-size:10px;
    }
    body, html {
      height: 100%;
      margin: 0;
      font-family: Arial;
    }
    thead {
      page-break-inside: avoid;
      display:table-header-group;
    }

.tg .tg-cly1 {
    text-align: left;
    vertical-align: middle
}
.tg .tg-nr{
  width:15%;
}
.tg .tg-nrix {
    text-align:center;
    vertical-align: middle;
  
}
.mt-4 . tg-cly1 {
  width: 1px;
}

.tg .tg-y0n7 {
    background-color: #efefef;
    text-align: center;
    vertical-align: middle;
    width:8%
}

.tg .tg-t31z {
    background-color: #efefef;
    border-color: #c0c0c0;
    text-align: center;
    vertical-align: middle
}

.tg .tg-0lax {
    text-align: left;
    vertical-align: top
}
.tg .tg-c3ow{
  text-align: left;
}
.tg-nee{
  font-size:10px;
}
td{
    
}
.stand{
  text-align:right; 
  padding-right: 50px;
}
 </style>`);

setTimeout(function() {
  WindowPrt.document.close();
  WindowPrt.focus();
  WindowPrt.print();
  WindowPrt.close();
}, 1500);
  }
}
