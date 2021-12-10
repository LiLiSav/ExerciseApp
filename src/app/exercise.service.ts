import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from './exercise';
import { EXERCISES } from './mock-exercises';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'x-rapidapi-key': '4b23e16ba9msh28effe1a1c28e7fp1e8fcdjsnba8ffa87d0da'
}

const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(
    private http: HttpClient
  ) { }

  getExercises(bodyPart: string): Observable<any>{
    const exerciseUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
    return this.http.get(exerciseUrl, requestOptions)
  }
}
