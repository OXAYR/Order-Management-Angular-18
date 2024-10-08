import { Component } from '@angular/core';

// componennt decorator: that it will provide the information about the class

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: string = 'My First Angular Project'; //strongly typed data
  angularVersion = 'Version 18'; // losesly typed data
  version: number = 18;
  isActive: Boolean = true;
  currentDate: Date = new Date();
}
