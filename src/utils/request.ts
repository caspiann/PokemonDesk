import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object) {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query));
  const result = await fetch(url).then((res) => res.json());
  return result;
}

export default req;
