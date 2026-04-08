import AdminMcqImportController from './AdminMcqImportController'
import SearchController from './SearchController'
import SubjectController from './SubjectController'
import PremiumController from './PremiumController'
const Public = {
    AdminMcqImportController: Object.assign(AdminMcqImportController, AdminMcqImportController),
SearchController: Object.assign(SearchController, SearchController),
SubjectController: Object.assign(SubjectController, SubjectController),
PremiumController: Object.assign(PremiumController, PremiumController),
}

export default Public