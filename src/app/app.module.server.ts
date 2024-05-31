import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TodosService } from './services/todos.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
