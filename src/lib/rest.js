import rest from 'rest'
import mime from 'rest/interceptor/mime'
import errorCode from 'rest/interceptor/errorCode'
import config from '../config'

const client = rest.wrap(mime)
                   .wrap(errorCode, { code: 500 })

client({ path: config.searchApiUrl }).then(
  (response) => {
    console.log('response: ', response)
  },
  (response) => {
    console.error('response error: ', response)
  }
)
