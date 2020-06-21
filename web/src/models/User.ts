import { UserProps, Callback } from './interfaces.ts'
import { API_URL } from '../config.js'

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: UserProps) {}

  //  get single piece of info about user
  get(propName: keyof UserProps): string | number | void {
    return this.data[propName]
  }

  //  change user info
  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  /* register event handler with this object so that
  other parts of the app know when something changes
  */
  on(eventName: string, cb: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(cb)
    this.events[eventName] = handlers
  }

  /*
    trigger an event to tell other parts of the app
    that something has changed
  */
  trigger(eventName: string): void {
    this.events[eventName]?.forEach(cb => cb())
  }

  //  fetch data from server
  async fetch() {
    const res = await fetch(`${API_URL}users/${this.get('id')}`)
    const data = await res.json()
    this.set(data)
  }

  // // store user data on server
  // save() {}
}
