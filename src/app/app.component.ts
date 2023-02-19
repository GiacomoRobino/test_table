import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './services/data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';
  dataSource$ !: Observable<any>;
  constructor(public dataService: DataService){}
  ngOnInit(){
    this.dataSource$ = this.dataService.getDataStream();
    this.dataService.getData();
  }
}
