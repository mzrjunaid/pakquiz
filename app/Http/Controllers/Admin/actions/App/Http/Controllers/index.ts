import Admin from './Admin'
import Frontend from './Frontend'
import lms from './lms'
import ChatController from './ChatController'
import Settings from './Settings'
const Controllers = {
    Admin: Object.assign(Admin, Admin),
Frontend: Object.assign(Frontend, Frontend),
lms: Object.assign(lms, lms),
ChatController: Object.assign(ChatController, ChatController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers