import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeadphoneService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/headphones/1.jpg',
      '/assets/images/headphones/2.jpg',
      '/assets/images/headphones/4.jpg',
    ]
  }
}
