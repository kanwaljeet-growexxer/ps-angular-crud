import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './ps-angular-crud.state';
import psAngularCrudComponent from './ps-angular-crud.component';
import psAngularCrudService from './ps-angular-crud.service';
import psiSearchFilter from '../_stateless/psi-search-filter';
import psiPageHeader from '../_stateless/psi-page-header';

const psAngularCrud = angular
    .module('psAngularCrud', [uiRouter, psiSearchFilter, psiPageHeader])
    .component('psAngularCrudComponent', psAngularCrudComponent)
    .service('psAngularCrudService', psAngularCrudService)
    .config(routes).name;

export default psAngularCrud;