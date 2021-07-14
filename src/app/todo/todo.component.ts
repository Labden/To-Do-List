import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  items : Todo[] = [{task: "clean room", completed : false},
  {task: "do dishes", completed: true},
  {task: "mow lawn", completed: true},
  {task: "get mail", completed: false}
]
addTask(form:NgForm){
  let entry:Todo={task:form.value.task,complete:false}

  this.items.push(items)
}

  completeTask();{
    let task = form.form.value.task
    this.task.push(task)
  }

}


