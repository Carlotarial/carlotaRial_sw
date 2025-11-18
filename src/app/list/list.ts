import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List implements OnInit {
  data: any[] = [];

  constructor(private apiService: Service) {}
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData() {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
