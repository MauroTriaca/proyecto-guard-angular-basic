import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myUrl = 'http://localhost:3000/usersRegistered';
  
  private usersRegisteredSignal = signal<any[]>([]);

  public usersRegistered = this.usersRegisteredSignal.asReadonly();

  private router = inject(Router);
}
