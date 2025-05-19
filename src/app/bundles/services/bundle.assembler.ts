import { Bundle } from '../model/bundle.entity';
import { BundleResponse, BundlesResponse } from './bundle.response';

export class BundleAssembler {
  static toEntityFromResource(resource: BundleResponse): Bundle {
    return {
      id: resource.id,
    };
  }

  static toEntitiesFromResponse(response: BundlesResponse): Bundle[] {
    return response.sources.map((source) => this.toEntityFromResource(source));
  }
}
