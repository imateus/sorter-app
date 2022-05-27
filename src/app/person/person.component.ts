import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from './person';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'

import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  form!: FormGroup;
  persons: Person[] = [];
  columns = ['picture', 'id', 'name', 'email', 'active']
  totalElementos = 0;
  page = 0;
  size = 10;
  pageSizeOptions : number[] = [10];

  constructor(
    private service: PersonService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.makeForm();
    this.listPersons(this.page, this.size);
  }

  makeForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  listPersons(page = 0, size = 10) {
    this.service.list(page, size).subscribe(response => {
      this.persons = response.content!;
      this.totalElementos = response.totalElements!;
      this.page = response.number!;
    })
  }

  active(person : Person){
    this.service.active(person).subscribe(response =>{
      person.active = !person.active;
    })
  }

  submit() {
    const formValues = this.form.value;
    const person = new Person(formValues.nome, formValues.email);
    this.service.save(person).subscribe(resposta => {
      this.listPersons();
      this.snackBar.open('Pessoa adicionada', 'Sucesso', {
        duration: 2000
      })
      this.form.reset();
    })
  }

  uploadPicture(event : any, person : Person){
    const files = event.target.files;
    if(files){
      const picture = files[0];
      const formData: FormData = new FormData();
      formData.append("picture", picture);
      this.service
            .upload(person, formData)
            .subscribe(response => this.listPersons(this.page, this.size));
    }
  }
  
  pagination(event : PageEvent){
    this.page = event.pageIndex;
    this.listPersons(this.page, this.size);
  }
}
