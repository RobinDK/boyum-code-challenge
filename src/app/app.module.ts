import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './todos/components/todo-details/todo-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DaysSincePipe } from './pipes/days-since.pipe';
import { ProgressPipe } from './pipes/progress.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoDetailsComponent,
    DateFormatPipe,
    DaysSincePipe,
    ProgressPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TodosModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
