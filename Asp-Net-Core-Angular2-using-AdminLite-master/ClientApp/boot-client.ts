import 'angular2-universal-polyfills/browser';
import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';
import { AppModule } from './app/app.module';
import 'bootstrap';
import 'bootstrap-webpack';
import 'admin-lte/dist/js/app';
//import 'admin-lte/build/less/AdminLTE.less';
//import 'admin-lte/build/less/skins/skin-blue.less';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/skin-blue.css';
//import 'admin-lte/build/less/skins/_all-skins.less';
import 'jquery-slimscroll';

// Enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { platform.destroy(); });
} else {
    enableProdMode();
}

// Boot the application, either now or when the DOM content is loaded
const platform = platformUniversalDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === 'complete') {
    bootApplication();
} else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}
