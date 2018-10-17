import { Users } from './data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: Users[] = [
    { name: 'Jamal', age: 23, location: 'Nairobi' },
    { name: 'Warinda', age: 22, location: 'Nairobi' },
    { name: 'Kuria', age: 23, location: 'Nairobi' },
    { name: 'Torocy', age: 23, location: 'Kisumu' }
  ];
}
