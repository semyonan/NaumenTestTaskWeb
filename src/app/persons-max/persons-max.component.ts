import {Component, OnInit} from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-persons-max',
  templateUrl: './persons-max.component.html',
  styleUrls: ['./persons-max.component.css']
})
export class PersonsMaxComponent implements OnInit {
  person:Person
  constructor(private personService: PersonService) {
    this.person=new Person();
  }

  ngOnInit(){
    this.personService.getMaxAged().subscribe(data => {
      this.person = data;
    });
  }
}
