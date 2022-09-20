import controller from './ps-angular-crud.controller';

const psAngularCrudComponent = {
    controller,
    bindings: {
        filtersList: '<',
        modalInstance: '<',
        resolve: '<',
        permissions: '<',
    },
    templateUrl: 'components/ps-angular-crud/ps-angular-crud.html',
};

export default psAngularCrudComponent;