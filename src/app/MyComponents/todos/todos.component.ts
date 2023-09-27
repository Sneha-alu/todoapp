import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  localItem: string | null | undefined;
  constructor() {

    this.localItem = localStorage.getItem("todos")
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos=[
    //   // {
    //   //   sno: 1,
    //   //   title:  'Java',
    //   //   desc: 'description',
    //   //   active:  true
    //   // },
    //   // {
    //   //   sno: 2,
    //   //   title:  'Python',
    //   //   desc: 'description',
    //   //   active:  true
    //   // }
    // ]
  }
  ngOnInit(): void {


  }

  deleteTodo(todo: Todo) {
    console.log("delete", todo)
    const index = this.todos.indexOf(todo)
    console.log(index)

    if (index !== -1) {
      this.todos.splice(index, 1); // Use splice to remove the element
    }

    console.log(this.todos)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }


  addTodo(todo: Todo) {
    console.log("add", todo)

    this.todos.push(todo); // Use splice to remove the element
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }


  toggleTodo(todo: Todo) {
    console.log("add", todo)
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }


}
