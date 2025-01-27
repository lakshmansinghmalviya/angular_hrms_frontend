import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// echo "# angular_hrms_frontend" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/lakshmansinghmalviya/angular_hrms_frontend.git
// git push -u origin main

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
