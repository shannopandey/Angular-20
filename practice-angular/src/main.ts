import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []),
    provideClientHydration(withEventReplay())
  ]
};

bootstrapApplication(App, mergedConfig)
  .catch((err) => console.error(err));
