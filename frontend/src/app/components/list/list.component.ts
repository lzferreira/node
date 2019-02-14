import { ProcessoService } from './../../processo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Processo } from '../../processo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  processos: Processo[];
  displayedColumns = ['numeroProcesso', 'reclamante', 'company', 'actions'];

  constructor(private processoService: ProcessoService, 
              private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }
  fetchIssues() {
    this.processoService
      .getProcessos()
      .subscribe((data: Processo[]) => {
        this.processos = data;
        console.log('Data requested ... ');
        console.log(this.processos);
      });
  }
  editProcesso(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteProcesso(id) {
    this.processoService.deleteProcesso(id).subscribe(() => {
      this.fetchIssues();
    });
  }
}