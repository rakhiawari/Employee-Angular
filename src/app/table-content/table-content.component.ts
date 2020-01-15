import { DataService } from './../services/data.service';
import { Data } from './../models/data';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent  {

employeeData:any;
searchText;
constructor(private employee:DataService){}
  ngOnInit(){
    this.employeeData=this.employee.getEmployees();
  }
  
  onSearch(){

  }
  
}

