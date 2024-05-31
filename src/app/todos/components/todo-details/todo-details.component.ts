import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../../services/todos.service';
import { ToDoDetailsModel } from '../../../models/todo-details';
import { take } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'
})
export class TodoDetailsComponent implements OnInit {

  toDoDetail: ToDoDetailsModel[] | undefined = [];
  itemId!: number;

  constructor(
    private route: ActivatedRoute,
    private todos: TodosService
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params =>
      this.itemId = params['id']
    );

    this.todos.GetToDoDetails(this.itemId)
      .pipe(take(1))
      .subscribe({
        next: results => {
          this.toDoDetail = results;
        },
        error: error => {
          console.error(error);
        }
      });
  }
}
