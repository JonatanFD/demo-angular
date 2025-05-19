import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import { Bundle } from '../../bundles/model/bundle.entity';

@Injectable({providedIn: 'root'})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;

  constructor() { }

  getUrlToLogo(source: Bundle) {
    console.log('getUrlToLogo', source);
    // verificar el id del la url
    return `${this.baseUrl}${new URL(source.id).hostname}`;
  }
}
