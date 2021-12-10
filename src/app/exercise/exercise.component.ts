import { Component, OnInit } from '@angular/core';
import { ExerciseService } from "./exercise.service";
import { Exercise } from './exercise';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  exercises: Exercise[] = [];
  
  constructor(private exerciseService: ExerciseService) { }

  ngOnInit(): void {
  }

  loadAllExercises(): void {
    this.exerciseService.getExercises()
      .subscribe(exercises => this.exercises = exercises);;
  }

  loadExercisesByBodyPart(bodyPart: string): void {
    this.exerciseService.getExercisesByBodyPart(bodyPart)
      .subscribe(exercises => this.exercises = exercises);;
  }
}
