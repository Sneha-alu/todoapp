import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  showCard: boolean = false;

  title: string = ""
  desc: string =""

  @Output()
  todoAdd : EventEmitter<Todo> = new EventEmitter();
  @Output()
  showAddCard : EventEmitter<Boolean> = new EventEmitter();
  constructor(){

  }

  ngOnInit(): void{
  }

  onSubmit(){

    const todo={
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo)
    this.showAddCard.emit(this.showCard)

  }
  onClick(){

    this.showAddCard.emit(this.showCard)

  }

}
