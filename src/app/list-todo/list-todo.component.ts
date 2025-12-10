import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo {
  constructor(
    public NO: number,
    public TASK: string,
    public STATUS: string,
    public PRIORITY: string,
    public DUE_DATE: Date
  ) { }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent {
updateTodo(id: any) {
// throw new Error('Method not implemented.');
  console.log(`update todo ${id}`); 
  this.router.navigate(['todos', id]);
}
  deleteSuccessMessage: string | any;
  todos: Todo[] | any
  constructor(private todoService: TodoDataService,
    private router: Router  
  ) { }
  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('om').subscribe( //hardcoded username 
      response => {
        this.todos = response;
        console.log(response);
      }
    )
  }
  deleteTodo(id: any) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo("om", id).subscribe(
      response => {console.log(response);
          this.deleteSuccessMessage = `Delete of todo ${id} Successful!`;
          this.refreshTodos(); 
      }
    )
  }


}
