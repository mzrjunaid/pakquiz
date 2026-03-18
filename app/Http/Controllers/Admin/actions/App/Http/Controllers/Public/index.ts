import AdminMcqImportController from './AdminMcqImportController'
import DemoController from './DemoController'
import SearchController from './SearchController'
import DepartmentController from './DepartmentController'
import TestingServiceController from './TestingServiceController'
import SubjectController from './SubjectController'
import PremiumController from './PremiumController'
import HomeController from './HomeController'
const Public = {
    AdminMcqImportController: Object.assign(AdminMcqImportController, AdminMcqImportController),
DemoController: Object.assign(DemoController, DemoController),
SearchController: Object.assign(SearchController, SearchController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
TestingServiceController: Object.assign(TestingServiceController, TestingServiceController),
SubjectController: Object.assign(SubjectController, SubjectController),
PremiumController: Object.assign(PremiumController, PremiumController),
HomeController: Object.assign(HomeController, HomeController),
}

export default Public