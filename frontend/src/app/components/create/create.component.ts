import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcessoService } from '../../processo.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private processoService: ProcessoService, 
              private fb: FormBuilder, 
              private router: Router) {
    this.createForm = this.fb.group({
      numeroProcesso: ['', Validators.required],
      reclamante: '',
      company: ''
    });
  }

  addProcesso(numeroProcesso, reclamante, company) {
    this.processoService.addProcesso(numeroProcesso, reclamante, company).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }
  
}