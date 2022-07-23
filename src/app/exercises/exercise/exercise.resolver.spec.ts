import { TestBed } from '@angular/core/testing';

import { ExerciseResolver } from './exercise.resolver';

describe('ExerciseResolverResolver', () => {
  let resolver: ExerciseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExerciseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
