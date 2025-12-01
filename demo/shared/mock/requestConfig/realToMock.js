import requestUrls from './requestUrls'
export function realToMock(requestConfig, name) {
  return {
    ...requestConfig,
    url: requestUrls[name]
  }
}