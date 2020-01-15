import { Data } from './../../models/data';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employee:Data;
  id:number;  
   constructor(private dataService:DataService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
        params => {
          this.id = +params['id'];
          this.employee = this.dataService.getEmployee(this.id);
          console.log(this.employee);
        }
      );
  }

}
