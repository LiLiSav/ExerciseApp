import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': '4b23e16ba9msh28effe1a1c28e7fp1e8fcdjsnba8ffa87d0da'
    })
  };

  constructor(private http: HttpClient) {
  }

  getExercises(): Observable<any> {
    const exercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';
    
    return this.http.get<Exercise[]>(exercisesUrl, this.httpOptions);
  }

  getExercisesByBodyPart(bodyPart: string): Observable<any> {
    const exercisesByBodyPartUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';

    return this.http.get<Exercise[]>(exercisesByBodyPartUrl.concat(bodyPart), this.httpOptions);
  }

}
