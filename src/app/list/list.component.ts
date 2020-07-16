import { Component, OnInit, Input } from '@angular/core';
import { ListItem, DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Array<ListItem>
  
  constructor(private ds: DataService) {
    this.todos = ds.my_todos
  }

  ngOnInit(): void {
    // for side-effects or async calls
    
  }
  
  complete = index => {
    let temp_todos = [...this.todos]
    temp_todos[index].completed = !temp_todos[index].completed
    this.todos = temp_todos
  }

  delete = index => {
    let temp_todos = [...this.todos]
    temp_todos.splice(index, 1)
    this.todos = temp_todos
  }

}
