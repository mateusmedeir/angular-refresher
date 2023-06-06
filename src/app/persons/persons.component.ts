import { Component, OnDestroy, OnInit } from "@angular/core";
import { PersonsService } from "./persons.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  isFetching = false;
  private personListSubs!: Subscription;

  constructor(private personsService: PersonsService) {}
  ngOnDestroy(): void {
    this.personListSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.personListSubs = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personsService.fetchPersons();
  }

  onRemovePerson(index: number) {
    this.personsService.removePerson(index);
  }
}
