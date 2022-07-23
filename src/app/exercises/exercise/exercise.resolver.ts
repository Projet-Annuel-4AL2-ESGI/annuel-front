import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Exercise} from "../../../models/Exercise";
import {ExerciseService} from "../../../services/ExerciseService";
import {UserProfile} from "../../../models/UserProfile";

@Injectable({
  providedIn: 'root'
})
export class ExerciseResolver implements Resolve<Exercise> {
  constructor(public exerciseService: ExerciseService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Exercise> | Promise<Exercise> | Exercise {
    return this.exerciseService.findOne(parseInt(<string>route.paramMap.get('id')));
  }
}
