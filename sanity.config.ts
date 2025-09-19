import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import {schema} from './sanity/schema'

export default defineConfig({
  name: 'real-estate-website',
  title: 'Real Estate Website',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Properties')
              .child(
                S.documentTypeList('property')
                  .title('Properties')
                  .filter('_type == "property"')
              ),
          ]),
    }),
    visionTool(),
  ],
  
  schema,
}) 