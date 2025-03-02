
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPIService {
  
  private apiUrl = 'http://localhost:8080/auth';
  
  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { correo: string, contraseña: string }): Observable<any> {
  const params = new HttpParams()
    .set('correo', credentials.correo)
    .set('contraseña', credentials.contraseña);

  return this.http.post(`${this.apiUrl}/login`, null, { params });
}
 
  register(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/registro`, usuario, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  obtenerSeccion(ruta: string): Observable<any> {
    const token = this.getToken();
    const headers = token
      ? new HttpHeaders({ 'Authorization': `Bearer ${token}` })
      : new HttpHeaders();

    return this.http.get<any>(`http://localhost:8080/api/${ruta}`, { headers });
  }
}
