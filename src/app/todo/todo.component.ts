import { Component,OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todo/list-todo.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
saveTodo() {
// throw new Error('Method not implemented.');
console.log('save todo works');
}
  id: number | any; 
  todo : Todo | any;
  constructor(private todoService:TodoDataService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() { 
    this.id = this.route.snapshot.params['id'];
    this.todo= new Todo(1,'','','',new Date());
    this.todoService.retreiveTodo('Om',this.id)
    .subscribe(
      data=>this.todo=data
    )}

}
