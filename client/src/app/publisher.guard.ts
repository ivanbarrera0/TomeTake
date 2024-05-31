import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const publisherGuard: CanActivateFn = (route, state) => {

  const authservice = inject(AuthService);
  const router = inject(Router);

  if(authservice.isAPublisher()) {
    return true;
  } else {
    router.navigate(['dashboard']);
    return false;
  }
};
