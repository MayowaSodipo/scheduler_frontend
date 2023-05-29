import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth-service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);

  if (authService.userData().role === 'admin') return true;
  else return false;
};
