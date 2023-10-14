import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("guard");
  if(localStorage.getItem("token") !== null)
    return true;
  return false;
};
