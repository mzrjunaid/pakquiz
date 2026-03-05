import AdminMcqImportController from './AdminMcqImportController'
import DemoController from './DemoController'
import HomeController from './HomeController'
import SearchController from './SearchController'
import McqController from './McqController'
import DepartmentController from './DepartmentController'
import TestingServiceController from './TestingServiceController'
import PaperController from './PaperController'
import SubjectController from './SubjectController'
import PremiumController from './PremiumController'
const Public = {
    AdminMcqImportController: Object.assign(AdminMcqImportController, AdminMcqImportController),
DemoController: Object.assign(DemoController, DemoController),
HomeController: Object.assign(HomeController, HomeController),
SearchController: Object.assign(SearchController, SearchController),
McqController: Object.assign(McqController, McqController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
TestingServiceController: Object.assign(TestingServiceController, TestingServiceController),
PaperController: Object.assign(PaperController, PaperController),
SubjectController: Object.assign(SubjectController, SubjectController),
PremiumController: Object.assign(PremiumController, PremiumController),
}

export default Public