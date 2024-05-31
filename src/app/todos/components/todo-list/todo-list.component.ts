import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListModel } from '../../../models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  @Input() toDoList: TodoListModel[] | undefined = [];
  @Output() statusChanged = new EventEmitter<object>();

  toogleStatus(name: string, status: boolean): void {
    this.statusChanged.emit({ name: name, status: status });
  }
}
