import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ProcessoService } from '../../processo.service';
import { Processo } from '../../processo.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  processo: any = {};
  updateForm: FormGroup;
  
  constructor(private processoService: ProcessoService, 
              private router: Router, 
              private route: ActivatedRoute, 
              private snackBar: MatSnackBar, 
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.processoService.getProcessoById(this.id).subscribe(res => {
        this.processo = res;
        this.updateForm.get('numeroProcesso').setValue(this.processo.numeroProcesso);
        this.updateForm.get('reclamante').setValue(this.processo.reclamante);
        this.updateForm.get('company').setValue(this.processo.company);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      numeroProcesso: ['', Validators.required],
      reclamante: '',
      company: ''
    });
  }

  updateProcesso(numeroProcesso, reclamante, company) {
    this.processoService.updateProcesso(this.id, numeroProcesso, reclamante, company).subscribe(() => {
      this.snackBar.open('Processo alterado com sucesso!', 'OK', {
        duration: 3000,
      });
    });
  }
}