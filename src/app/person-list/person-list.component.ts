import {Component, OnInit} from '@angular/core';
import {Person} from "../model/person";
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) {
    this.persons = []
  }

  ngOnInit() {
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });
  }
}
