import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BundleResponse } from './bundle.response';
import { map } from 'rxjs';
import { BundleAssembler } from './bundle.assembler';

/*

      .get<SourcesResponse>(`${this.baseUrl}${this.sourcesEndpoint}`, {
        params: { apiKey: this.apiKey },
      })

 */

@Injectable({
  providedIn: 'root',
})
export class BundleService {
  private baseUrl = environment.bundlesApiBaseUrl;

  constructor(private http: HttpClient) {}

  getBundles() {
    return this.http
      .get<BundleResponse[]>(`${this.baseUrl}`)
      .pipe(
        map((response) => {
          console.log('BundlesResponse in service', response);
          return BundleAssembler.toEntitiesFromResponse(response)
        })
      );
  }
}
