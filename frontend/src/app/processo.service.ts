import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
  }

  getProcessos() {
    console.log("aqui");
    return this.http.get(`${this.uri}/processo`);
  }
  getProcessoById(id) {
    return this.http.get(`${this.uri}/processo/${id}`);
  }

  addProcesso(numeroProcesso, reclamante, company) {
    const processo = {
      numeroProcesso: numeroProcesso,
      reclamante: reclamante,
      company: company
    };
    return this.http.post(`${this.uri}/processo`, processo);
  }

  updateProcesso(id, numeroProcesso, reclamante, company) {
    const processo = {
      numeroProcesso: numeroProcesso,
      reclamante: reclamante,
      company: company
    };
    return this.http.put(`${this.uri}/processo/${id}`, processo);
  }

  deleteProcesso(id) {
    return this.http.delete(`${this.uri}/processo/${id}`);
  }
}
