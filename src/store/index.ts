import { types } from 'mobx-state-tree'
import Session from './Session'

const RootStore = types.model({
  session: types.optional(Session, {})
})

export default RootStore

export type IRootStore = typeof RootStore.Type
