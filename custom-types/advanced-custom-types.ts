type VersionString = `v${number}`

type ApiUrls = {
  [version in VersionString]: string
}

const apiKey: string = 'x-api-key'
const baseUrl: string = "https://api.opensea.io/api"
const versions: VersionString[] = ["v1", "v2"]

const apiUrls: ApiUrls = versions.reduce((urls: ApiUrls, version: VersionString) => {
  urls[version] = `${baseUrl}/${version}`
  return urls;
}, {} as ApiUrls)

export {
  apiKey,
  apiUrls
}