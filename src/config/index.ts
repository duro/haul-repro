import ConfStore from 'conf-store'
import Expo from 'expo'

const criteria = {
  releaseChannel: Expo.Constants.manifest.releaseChannel
}

const config = {
  ApiHostname: 'https://staging.freebirdrides.com',
  ReduxDevTools: {
    realtime: true
  }
}

const store = new ConfStore(config)

export const AppConfig = {
  get: (key: string) => store.get(key, criteria)
}
