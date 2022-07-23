import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Exercise} from "../../../models/Exercise";
import {ExerciseService} from "../../../services/ExerciseService";

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
