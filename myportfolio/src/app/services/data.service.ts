import { Injectable } from '@angular/core';

export interface skill{
  name:string,
  level:string,
  rating:number,
}
export interface project{
  url :string,
  image:string,
  title:string,
}
export interface study{
  course:string,
  university:string,
  batch:string,
  percentage:number,
}
export interface work{
  designation: string,
  period: string,
  experience: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  name = "Vijaya Lakshmi";
  Place = "Thenkasi, Tamilnadu";
  constructor() { }
}
