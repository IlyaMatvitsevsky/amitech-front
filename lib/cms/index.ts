import { CmsConfig } from './types';
import { fetchGraphqlApi } from './client';
import getPageContent from './operations/get-page-content';
import getFooter from './operations/get-footer';
import getHeader from './operations/get-header';
import getPrivacy from './operations/get-privacy';
import getWorkPage from './operations/get-work-page';


const config: CmsConfig = {
  apiUrl: process.env.STRAPI_API_URL || '',
  authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
  fetchGraphqlApi: fetchGraphqlApi(() => config),
}

const operations = {
  getPageContent: getPageContent({ config }),
  getHeader: getHeader({ config }),
  getFooter: getFooter({ config }),
  getPrivacy: getPrivacy({ config }),
  getWork: getWorkPage({config})
}

const provider = { config, operations }

export type CmsProvider = typeof provider

const cmsApi = provider.operations

export default cmsApi