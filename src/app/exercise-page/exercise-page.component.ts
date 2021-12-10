import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { EXERCISES } from '../mock-exercises';
import { ValuesService } from '../values-service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss']
})
export class ExercisePageComponent implements OnInit {

  exercises: Exercise[] = [];
  chosenMuscle = '';

  constructor(public valueService: ValuesService,
    private exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.chosenMuscle = this.valueService.chosenMuscle;
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getExercises(this.valueService.chosenUrl).subscribe(
      result => this.exercises = result
    );
  }

}
