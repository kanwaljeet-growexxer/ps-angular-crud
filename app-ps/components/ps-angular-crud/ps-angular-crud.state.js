const routes = ($stateProvider) => {
    $stateProvider.state('psAngularCrud', {
        url: '/cockpit/ps-angular-crud',
        component: 'psAngularCrudComponent',
        resolve: {},
        data: {
            ga: {
                title: 'PS Angular Crud',
                parameter: 'Summary',
            },
        },
    });
};

routes.$inject = ['$stateProvider'];

export default routes;