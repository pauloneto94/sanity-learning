import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-07-16',
    useCdn: false
}

const client = createClient(config)

export default client