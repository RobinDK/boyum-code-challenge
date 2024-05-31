import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TodoDetailsComponent } from './todo-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TodosService } from '../../../services/todos.service';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';
import { DaysSincePipe } from '../../../pipes/days-since.pipe';
import { ProgressPipe } from '../../../pipes/progress.pipe';

const meta: Meta<TodoDetailsComponent> = {
  component: TodoDetailsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DateFormatPipe,
        DaysSincePipe,
        ProgressPipe
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        TodosService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id: 6 })
          }
        }
      ]
    })
  ],
  render: (args) => ({
    props: {
      ...args
    },
    template: `<app-todo-details ${argsToTemplate(args)}></app-todo-details>`,
  }),
};

export default meta;
type Story = StoryObj<TodoDetailsComponent>;

export const Default: Story = {
  args: {
    toDoDetail: [{
      Id: 6,
      Name: "Construct fermentor",
      Description: "Maecenas sit amet dolor pharetra, congue orci et, vehicula nisl. Aenean fermentum lacus velit, vel vulputate odio ornare vitae. Nullam neque ligula, tincidunt id felis sit amet, vulputate bibendum libero.",
      Done: false,
      Expenses: 1337.666,
      Created: 1615481792000
    }]
  },
};