import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValuesService } from '../values-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bodyParts = [
    { label: 'Chest', name: 'chest' },
    { label: 'Shoulders', name: 'shoulders' },
    { label: 'Back', name: 'back' },
    { label: 'Lower Arm', name: 'lower arms' },
    { label: 'Upper Arm', name: 'upper arms' },
    { label: 'Lower Leg', name: 'lower legs' },
    { label: 'Upper Leg', name: 'upper legs' },
    { label: 'Waist', name: 'waist' },
    { label: 'Cardio', name: 'cardio' },
  ]

  constructor(
    private router: Router,
    public valueService: ValuesService
  ) { }

  ngOnInit(): void {
  }

  bellClick() {
    alert("It's time to work out!!!!");
  }

  assignMuscle(muscle: any) {
    this.valueService.chosenMuscle = muscle.label;
    this.valueService.chosenUrl = muscle.name;
  }

}
