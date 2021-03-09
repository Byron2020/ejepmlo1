
import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ngOnInit(): void {
    this.refresDepList();
  }

  refresDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    });
  }

}
