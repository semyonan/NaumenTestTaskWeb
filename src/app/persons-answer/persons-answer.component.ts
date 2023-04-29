import { Component } from '@angular/core';
import {PersonService} from "../person.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-persons-answer',
  templateUrl: './persons-answer.component.html',
  styleUrls: ['./persons-answer.component.css']
})
export class PersonsAnswerComponent {
  age:string | null;
  constructor(private route : ActivatedRoute) {
    this.age=route.snapshot.params['age'];
  }
}
