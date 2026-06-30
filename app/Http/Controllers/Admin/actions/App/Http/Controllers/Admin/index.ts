import DashboardController from './DashboardController'
import TestingServiceController from './TestingServiceController'
import DepartmentController from './DepartmentController'
import SubjectController from './SubjectController'
import TopicController from './TopicController'
import PaperController from './PaperController'
import JobController from './JobController'
import McqController from './McqController'
import SeoMetaController from './SeoMetaController'
import SchedulerController from './SchedulerController'
import AdminPaperImportController from './AdminPaperImportController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
TestingServiceController: Object.assign(TestingServiceController, TestingServiceController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
SubjectController: Object.assign(SubjectController, SubjectController),
TopicController: Object.assign(TopicController, TopicController),
PaperController: Object.assign(PaperController, PaperController),
JobController: Object.assign(JobController, JobController),
McqController: Object.assign(McqController, McqController),
SeoMetaController: Object.assign(SeoMetaController, SeoMetaController),
SchedulerController: Object.assign(SchedulerController, SchedulerController),
AdminPaperImportController: Object.assign(AdminPaperImportController, AdminPaperImportController),
}

export default Admin