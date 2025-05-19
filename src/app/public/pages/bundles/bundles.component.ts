import { Component, inject } from '@angular/core';
import { Bundle } from '../../../bundles/model/bundle.entity';
import { BundleService } from '../../../bundles/services/bundle.service';
import { BundleBrowserComponent } from '../../../bundles/components/bundle-browser/bundle-browser.component';

@Component({
  selector: 'app-bundles',
  imports: [BundleBrowserComponent],
  templateUrl: './bundles.component.html',
  styleUrl: './bundles.component.css',
})
export class BundlesComponent {
  bundles: Bundle[] = [];

  private bundleService = inject(BundleService);

  constructor() {}

  ngOnInit(): void {
    this.initializeBundles();
  }

  initializeBundles() {
    this.bundleService.getBundles().subscribe((bundles) => {
      this.bundles = bundles;
    });
  }

  filterBundles(field: string) {
    if (field === '') {
      this.initializeBundles();
      return;
    }

    this.bundles = this.bundles.filter((bundle) => {
      return bundle.name.toLowerCase().includes(field.toLowerCase());
    });
  }
}
