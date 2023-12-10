import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardHttpService {
  constructor(private http: HttpClient) {}

  getBoards() {
    return this.http.get<{ boards: Board[] }>('assets/data.json');
  }
}
