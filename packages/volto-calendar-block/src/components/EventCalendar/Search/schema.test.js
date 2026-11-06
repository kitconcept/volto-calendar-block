import { createIntl, createIntlCache } from 'react-intl';
import config from '@plone/volto/registry';
import { installDefaultBlocks } from '@plone/volto/config/Blocks';
import SearchSchema from './schema';

const intl = createIntl(
  { locale: 'en', messages: {}, onError: () => {} },
  createIntlCache(),
);

const TEST_VARIATION = 'eventCalendarTestVariation';

describe('eventCalendar blockSchema', () => {
  beforeAll(() => {
    installDefaultBlocks(config);
  });

  afterEach(() => {
    const variations = config.blocks.blocksConfig.listing.variations;
    config.blocks.blocksConfig.listing.variations = variations.filter(
      (item) => item.id !== TEST_VARIATION,
    );
  });

  it('resolves with only intl, as the @blocks-schema endpoint calls it', () => {
    const schema = SearchSchema({ intl });
    expect(schema.title).toBe('Search block');
    expect(schema.fieldsets.length).toBeGreaterThan(0);
    expect(Object.keys(schema.properties)).toContain('headline');
    expect(Object.keys(schema.properties)).toContain('facets');
  });

  it('applies the schemaEnhancer of the listing variation in the data', () => {
    config.blocks.blocksConfig.listing.variations.push({
      id: TEST_VARIATION,
      title: 'Test variation',
      schemaEnhancer: ({ schema }) => {
        schema.properties.testExtraField = { title: 'Extra' };
        return schema;
      },
    });

    const schema = SearchSchema({
      data: { listingBodyTemplate: TEST_VARIATION },
      intl,
    });
    expect(schema.properties.testExtraField).toEqual({ title: 'Extra' });
    expect(SearchSchema({ intl }).properties.testExtraField).toBeUndefined();
  });
});
