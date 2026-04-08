import AdminMcqImportController from './AdminMcqImportController'
import SearchController from './SearchController'
import SubjectController from './SubjectController'
import PremiumController from './PremiumController'
import HomeController from './HomeController'
const Public = {
    AdminMcqImportController: Object.assign(AdminMcqImportController, AdminMcqImportController),
SearchController: Object.assign(SearchController, SearchController),
SubjectController: Object.assign(SubjectController, SubjectController),
PremiumController: Object.assign(PremiumController, PremiumController),
HomeController: Object.assign(HomeController, HomeController),
}

export default Public