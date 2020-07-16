import { Injectable } from '@angular/core';

export interface ListItem {
  task: string,
  date: Date,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})

export class DataService {

  my_todos: Array<ListItem> = []

  constructor() { }
}
