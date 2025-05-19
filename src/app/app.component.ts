import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import { LanguageService } from 'typescript';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    TranslatePipe,
    LanguageSwitcherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-angular';

  constructor(private translateService: TranslateService) {
    this.initLanguage()
  }

  initLanguage() {
    const language = localStorage.getItem('language');
    console.log('Language from localStorage:', language);
    const availableLanguages = ['en', 'es'];
    if (language !== null && availableLanguages.includes(language)) {
      this.translateService.use(language);
      localStorage.setItem('language', language);
      return
    }

    this.translateService.setDefaultLang('en');
    localStorage.setItem('language', 'en');
  }
}
