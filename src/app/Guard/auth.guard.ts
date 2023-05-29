import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  if (authService.isLoggedIn()) return true;
  else return false;
};
