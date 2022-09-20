class psAngularCrudService {
    constructor ($http, commonService, psiAgGridService) {
        this.http = $http;
        this.commonService = commonService;
        this.psiAgGridService = psiAgGridService;
    }
}

psAngularCrudService.$inject = [
    '$http',
    'commonService',
    'psiAgGridService',
];

export default psAngularCrudService;