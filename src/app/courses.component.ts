import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
// import { SummaryPipe } from './summary.pipe';

@Component({
  selector: 'app-courses',
  template: `
      <h2>{{ title }}</h2>
      <img [src]="imageUrl"/>
      <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
        </tr>
      </table>
      <ul>
        <li *ngFor="let course of courses">
          {{ course}}
        </li>
      </ul>
      <div (click)='onDivClicked()'>
        <button class="btn btn-primary" (click)="onSave($event)" [class.active]="isActive">Save</button>
      </div>
      <input [value]="name" (keyup.enter)="name = $event.target.value; onKeyUp()" />
      <input [(ngModel)]="name" (keyup.enter)="onKeyUp()" />
      <br/><br/>
      {{ course.title | uppercase | lowercase }} <br/>
      {{ course.students | number }} <br/>
      {{ course.rating | number:'2.1-1' }} <br/>
      {{ course.price | currency:'ZAR':true:'3.2-2' }} <br/>
      {{ course.releaseDate | date:'shortDate' }} <br/>
      {{ text | summary:15 }}
      `
})

export class CoursesComponent {
  title = 'List of courses';
  imageUrl = 'assets/images/Coupon.jpg';
  colSpan = 2;
  courses;
  isActive = false;
  name = 'Sabelo';

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2018, 3, 1)
  };
  text = `
  Lorem ipsum dolor sit amet, usu vero dicunt no,
  cu qui discere quaestio volutpat. Ius ferri legere antiopam et,
   vim ne invidunt probatus. Te vim dolor utroque, quot porro voluptua ex quo.
   Sed eu ignota pertinacia, et nec delenit contentiones, corpora dissentiunt mei cu.
  `;

  onSave($event) {
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }
  onDivClicked() {
    console.log('Div was clicked');
  }
  onKeyUp() {
    console.log('ENTER was pressed', this.name);
  }

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
