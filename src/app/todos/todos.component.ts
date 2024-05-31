import { Component, OnInit } from '@angular/core';
import { TodoListModel } from '../models/todo-list';
import { TodosService } from '../services/todos.service';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  toDoList: TodoListModel[] | undefined = [];

  generalForm!: FormGroup;
  submitted = false;

  get f() {
    return this.generalForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private todos: TodosService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.todos.GetToDoList()
      .pipe(take(1))
      .subscribe({
        next: results => {
          this.toDoList = results;
        },
        error: error => {
          console.error(error);
        }
      });

    this.generalForm = this.fb.group({
      name: ['', Validators.required],
      expenses: ['', Validators.pattern("^[0-9]*$")],
      description: [''],
    });
  }

  statusChanged(event: object | any): void {
    if (event.status) {
      this.toastr.success(`'${event.name}' has been marked as 'done'`, 'Update!');
    } else {
      this.toastr.error(`'${event.name}' has been marked as 'work in progress'`, 'Update!');
    }
  }

  onSubmit(): void {

    this.submitted = true;

    if (this.generalForm.valid) {
      const date = new Date();
      var e = {
        Id: this.randomIntFromInterval(10, 99),
        Name: this.generalForm?.get('name')?.value,
        Description: this.generalForm.get('description')?.value,
        Done: false,
        Expenses: this.generalForm.get('expenses')?.value,
        Created: date.getTime()
      };
      this.toDoList!.push(e);

      this.toastr.success('A new entry has been created!', 'Success!');
    }
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
