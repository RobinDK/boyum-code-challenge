import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TodosComponent } from './todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from '../services/todos.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta<TodosComponent> = {
  component: TodosComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
      ],
      providers: [
        TodosService,
        BrowserAnimationsModule,
        { provide: ToastrService, useValue: ToastrService },
      ]
    })
  ],
};

export default meta;
type Story = StoryObj<TodosComponent>;

export const Default: Story = {
  args: {},
};
