import angular from 'angular';
import salesInvoice from './sales-invoice';
import customerEntry from './customer-entry';
import licenseRegistration from './license-registration';
import cashReport from './cash-report';
import upcomingPayments from './upcoming-payments';
import colaWavier from './cola-waiver';
import chargebacks from './chargebacks';
import marketPlace from './market-place';
import brandManagement from './brand-management';
import uomManagement from './uom-management';
import subBrandManagement from './sub-brand-management';
import expenseReport from './expense-report';
import productTool from './product-tool';
import accountsReceivable from './accounts-receivable';
import colaSummary from './cola-summary';
import marketplaceCatalog from './marketplace-catalog';
import inventoryByLocation from './inventory-by-location';
import savedReport from './saved-reports';
import subBrandProductManagement from './sub-brand-product-management';
import invoiceDeliverySystem from './invoice-delivery-system';
import orderStatusSystem from './order-status-system';
import orderManagementSystem from './order-management-system';
import invoiceBillManagement from './invoice-bill-management';
import domesticShipments from './domestic-shipments';
import internationalShipments from './international-shipments';
import myCompanies from './my-companies';
import myProfile from './my-profile';
import dashboard from './dashboard';
import signup from './authentication/signup';
import login from './authentication/login';
import forgotPassword from './authentication/forgot-password';
import resetPassword from './authentication/reset-password';
import openDashboard from './open-dashboard';
import cms from './cms';
import billingCenter from './billing-center';
import interactivePricingTool from './interactive-pricing-tool';
import purchaseOrders from './purchase-orders';
import purchaseOrdersNavigator from './purchase-orders-navigator';
import inventoryManagement from './inventory-management';
import announceManagement from './announcement-management';
import monthlyReports from './monthly-reports';
import monthlyReportsNavigator from './monthly-reports-navigator';
import transferOrder from './transfer-order';
import marketplaceBilling from './marketplace-billing';
import inventoryManagementNavigator from './inventory-management-navigator';
import cashReconciliation from './cash-reconciliation';
import noteAdd from './mobile/note-add';
import noteList from './mobile/note-list';
import queueDashboard from './queue-dashboard';
import arFollowUpWholesale from './ar-follow-up-wholesale';
import arFollowUpRetailer from './ar-follow-up-retailer';
import productCodeManagement from './product-code-management';
import customerPricingNavigator from './customer-pricing-navigator';
import customerPricing from './customer-pricing';
import billingActivity from './billing-activity';
import stateRegistrations from './state-registrations';
import earlyPayments from './early-payments';
import billManagement from './bill-management';
import invoiceManagementSummary from './invoice-management-summary';
import productManagement from './product-management';
import clientManagementSystemComponent from './client-management-system';
import monthlyReportsCockpit from './monthly-reports-cockpit';
import distributionRequest from './distribution-request';
import supplierInvoiceManagement from './supplier-invoice-management';
import cashReportNew from './cash-report-new';
import internationalShipmentNew from './international-shipment-new';
import ediLogs from './edi-logs';
import clientBillingActivity from './client-billing-activity';
import retailDemandTool from './retail-demand-tool';
import nyPricingSnapShot from './ny-pricing-snapshot';
import solicitorPermits from './solicitor-permits';
import colaWavierNew from './cola-waiver-new';
import competitionsManagerCockpit from './competitions-manager-cockpit';
import psAngularCrud from './ps-angular-crud';

const componentsModule = angular
    .module('app.components', [
        marketPlace,
        salesInvoice,
        customerEntry,
        licenseRegistration,
        cashReport,
        upcomingPayments,
        colaWavier,
        chargebacks,
        brandManagement,
        uomManagement,
        subBrandManagement,
        expenseReport,
        productTool,
        accountsReceivable,
        colaSummary,
        subBrandProductManagement,
        invoiceDeliverySystem,
        marketplaceCatalog,
        inventoryByLocation,
        savedReport,
        orderStatusSystem,
        orderManagementSystem,
        invoiceBillManagement,
        domesticShipments,
        internationalShipments,
        myCompanies,
        myProfile,
        dashboard,
        signup,
        login,
        forgotPassword,
        resetPassword,
        openDashboard,
        cms,
        billingCenter,
        interactivePricingTool,
        transferOrder,
        marketplaceBilling,
        purchaseOrders,
        purchaseOrdersNavigator,
        inventoryManagement,
        inventoryManagementNavigator,
        announceManagement,
        monthlyReports,
        cashReconciliation,
        monthlyReportsNavigator,
        noteAdd,
        noteList,
        billingActivity,
        queueDashboard,
        arFollowUpWholesale,
        arFollowUpRetailer,
        productCodeManagement,
        customerPricingNavigator,
        customerPricing,
        stateRegistrations,
        earlyPayments,
        billManagement,
        invoiceManagementSummary,
        productManagement,
        clientManagementSystemComponent,
        monthlyReportsCockpit,
        distributionRequest,
        supplierInvoiceManagement,
        cashReportNew,
        internationalShipmentNew,
        ediLogs,
        clientBillingActivity,
        retailDemandTool,
        nyPricingSnapShot,
        solicitorPermits,
        colaWavierNew,
        competitionsManagerCockpit,
        psAngularCrud
    ])
    .name;

export default componentsModule;
