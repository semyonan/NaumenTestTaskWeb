import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService) {
    this.name = "";
  }

  onSubmit() {
    this.personService.getAge(this.name).subscribe((data)=>this.gotoPersonList(data));
  }

  gotoPersonList(age:number) {
    this.router.navigate(['/answer/' + age.toString()]);
  }
}
