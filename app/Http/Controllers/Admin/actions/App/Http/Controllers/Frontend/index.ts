import AdminMcqImportController from './AdminMcqImportController'
import SearchController from './SearchController'
import SubjectController from './SubjectController'
import PremiumController from './PremiumController'

const Frontend = {
    AdminMcqImportController: Object.assign(AdminMcqImportController, AdminMcqImportController),
    SearchController: Object.assign(SearchController, SearchController),
    SubjectController: Object.assign(SubjectController, SubjectController),
    PremiumController: Object.assign(PremiumController, PremiumController),
}

export default Frontend