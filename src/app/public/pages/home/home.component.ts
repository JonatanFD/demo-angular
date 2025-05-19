import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../components/language-switcher/language-switcher.component';
import { BundleService } from '../../../bundles/services/bundle.service';
import { Bundle } from '../../../bundles/model/bundle.entity';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TranslatePipe,
    LanguageSwitcherComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // Injectamos el servicio de bundles para obtener los bundles
  bundles: Bundle[] = [];

  private bundleService = inject(BundleService);

  constructor() {}

  ngOnInit(): void {
    // Obtenemos los bundles al iniciar el componente
    this.bundleService.getBundles().subscribe((bundles) => {
      this.bundles = bundles;
    });
  }
}
