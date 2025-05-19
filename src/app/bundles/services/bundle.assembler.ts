import { Bundle } from '../model/bundle.entity';
import { BundleResponse } from './bundle.response';

export class BundleAssembler {
  static toEntityFromResource(resource: BundleResponse): Bundle {
    return {
      id: resource.id,
      name: resource.name,
    };
  }

  static toEntitiesFromResponse(response: BundleResponse[]): Bundle[] {
    console.log('BundlesResponse', response);
    return response.map((source) => this.toEntityFromResource(source));
  }
}
