import Admin from './Admin'
import Frontend from './Frontend'
import LMSController from './LMSController'
import ChatController from './ChatController'
import Settings from './Settings'
const Controllers = {
    Admin: Object.assign(Admin, Admin),
Frontend: Object.assign(Frontend, Frontend),
LMSController: Object.assign(LMSController, LMSController),
ChatController: Object.assign(ChatController, ChatController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers