import { Component, Input, OnInit } from '@angular/core';
import { Bundle } from '../../model/bundle.entity';
import { BundleService } from '../../services/bundle.service';

@Component({
  selector: 'app-bundle-list',
  imports: [],
  templateUrl: './bundle-list.component.html',
  styleUrl: './bundle-list.component.css',
})
export class BundleListComponent {
  @Input() bundles!: Bundle[];
}
