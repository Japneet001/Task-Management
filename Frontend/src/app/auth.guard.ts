import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // return true;
  const router = inject(Router);
  const loginInfo = localStorage.getItem('user');
  if (loginInfo != null) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
