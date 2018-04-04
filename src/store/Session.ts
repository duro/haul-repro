import { applySnapshot, flow, types } from 'mobx-state-tree'
import { AsyncStorage } from 'react-native'

export const SessionStorageKey = 'Session'

const SessionModel = types
  .model({
    token: types.maybe(types.string)
  })
  .actions(self => ({
    bootstrap: flow(function* bootstrap() {
      const sessionRaw = yield AsyncStorage.getItem(SessionStorageKey)
      if (sessionRaw) {
        const session = JSON.parse(sessionRaw)
        if (SessionModel.is(session)) {
          applySnapshot(self, session)
        }
      }
    }),
    setToken(token: string) {
      self.token = token
    },
    logout() {
      applySnapshot(self, {})
    }
  }))

export default SessionModel

export type ISession = typeof SessionModel.Type
