import { argsToTemplate, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TodoListComponent } from './todo-list.component';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../../pipes/date-format.pipe';

const meta: Meta<TodoListComponent> = {
  component: TodoListComponent,
  decorators: [
    moduleMetadata({
      declarations: [DateFormatPipe],
      imports: [],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<app-todo-list ${argsToTemplate(args)}></app-todo-list>`,
  }),
};

export default meta;
type Story = StoryObj<TodoListComponent>;


export const Default: Story = {
  args: {
    toDoList: [
      { Id: 1, Name: "Clean oven", Done: false, Created: 1617681792000 },
      {
        Id: 2, Name: "Mowing the lawn", Done: false, Created: 1618481792000
      },
      {
        Id: 3, Name: "Repair gate", Done: true, Created: 15184819988792000
      },
      {
        Id: 4, Name: "Wash car", Done: false, Created: 15184819988792000
      },
      {
        Id: 5, Name: "Make pickles", Done: true, Created: 1612481792000
      },
      {
        Id: 6, Name: "Construct fermentor", Done: false, Created: 1612481792000
      },
    ],
  },
};