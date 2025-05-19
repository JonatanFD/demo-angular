import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BundlesResponse } from './bundle.response';
import { map } from 'rxjs';
import { BundleAssembler } from './bundle.assembler';

@Injectable({
  providedIn: 'root',
})
export class BundleService {
  private baseUrl = environment.bundlesApiBaseUrl;

  constructor(private http: HttpClient) {}

  getBundles() {
    return this.http
      .get<BundlesResponse>(`${this.baseUrl}`)
      .pipe(
        map((response) => BundleAssembler.toEntitiesFromResponse(response))
      );
  }
}
