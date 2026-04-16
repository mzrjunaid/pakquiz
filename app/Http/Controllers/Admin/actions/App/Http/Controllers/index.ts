import Admin from './Admin'
import Public from './Public'
import ChatController from './ChatController'
import Settings from './Settings'
const Controllers = {
    Admin: Object.assign(Admin, Admin),
Public: Object.assign(Public, Public),
ChatController: Object.assign(ChatController, ChatController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers