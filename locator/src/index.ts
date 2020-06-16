import { CustomMap } from './CustomMap'
import { User } from './User'

const user = new User()
console.log(user.location)
const customMap = new CustomMap('map')
customMap.addUserMarker(user)
