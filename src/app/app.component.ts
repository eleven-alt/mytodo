import { Component } from '@angular/core';
import { ListItem, DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'kuch bhi change';

  todo: ListItem = {
    task: '',
    date: null,
    completed: false
  }

  showImage: boolean = false
  mywidth: number = 0

  switchCase: number = 3

  todos: Array<ListItem>

  constructor (private dataService: DataService) {
    this.todos = dataService.my_todos
  }

  toggle = () => {
    this.showImage = !this.showImage
  }

  addItem = () => {
    if(this.todo.task !== '') {
      // creating new todo
      let curTodo = {...this.todo}
      curTodo.date = new Date()
      // adding to the list
      this.todos.push(curTodo)
      console.log(this.todos)
      // clear
      this.todo = {
        task: '',
        date: null,
        completed: false
      }
    }
  }
  
  
}
