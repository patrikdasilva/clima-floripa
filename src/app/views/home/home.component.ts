import { Component, OnInit } from '@angular/core';
import { ClimService } from 'src/app/service/clim.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  icConected: any;

  constructor(
    public climService: ClimService,
  ) { }

  ngOnInit(): void {
  }

  getConected() {
    this.climService.getConected().subscribe((data: any) => {
      this.icConected = data;
    });
  }

  toConect() {
    this.climService.toConect().subscribe((data: any) => {
      this.icConected = data;
    });
  }

  toSwitchOff() {
    this.climService.toSwitchOff().subscribe((data: any) => {
      this.icConected = data;
    });
  }
}
