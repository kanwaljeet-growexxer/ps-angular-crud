class PsAngularCrudController {
    constructor (
        $uibModal,
        $timeout,
        $scope,
        $window,
        psAngularCrudService,
        usSpinnerService,
        commonService,
        appConstant
    ) {
        'ngInject';
        this.window = $window;
        this.uibModal = $uibModal;
        this.timeout = $timeout;
        this.scope = $scope;
        this.psAngularCrudService = psAngularCrudService;
        this.usSpinnerService = usSpinnerService;
        this.commonService = commonService;
        this.CONSTANTS = appConstant;
    }

    $onInit () {}
}
PsAngularCrudController.$inject = [
    '$uibModal',
    '$timeout',
    '$scope',
    '$window',
    'psAngularCrudService',
    'usSpinnerService',
    'commonService',
    'appConstant',
];

export default PsAngularCrudController;