import { assign, get } from 'lodash'
import { AsyncStorage } from 'react-native'
import { AppConfig } from '../config'
import { SessionStorageKey } from '../store/Session'

export default async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  const { token } = JSON.parse(await AsyncStorage.getItem(SessionStorageKey))

  if (typeof input === 'string') {
    if (input.indexOf('http://') !== 0 && input.indexOf('https://') !== 0) {
      input = `${AppConfig.get('/ApiHostname')}${input}`
    }
  }

  if (token) {
    const headers = assign({}, get(init, 'headers', {}), {
      Authorization: token
    })
    init = assign({}, init, { headers })
  }

  return fetch(input, init)
}
