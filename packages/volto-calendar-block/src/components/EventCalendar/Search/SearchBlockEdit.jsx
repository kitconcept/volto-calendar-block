import React, { useEffect } from 'react';
// import { defineMessages } from 'react-intl';
import { compose } from 'redux';

import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
// import { addExtensionFieldToSchema } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import config from '@plone/volto/registry';

import { SearchBlockViewComponent } from './SearchBlockView';
import Schema from './schema';
import { withSearch } from './hocs';
import { withQueryString } from '@plone/volto/components/manage/Blocks/Search/hocs';

// const messages = defineMessages({
//   template: {
//     id: 'Results template',
//     defaultMessage: 'Results template',
//   },
// });

const SearchBlockEdit = (props) => {
  const {
    block,
    blocksErrors,
    onChangeBlock,
    data,
    selected,
    intl,
    navRoot,
    contentType,
    onTriggerSearch,
    querystring = {},
  } = props;
  const { sortable_indexes = {} } = querystring;
  // The data adapter is part of the block configuration, as in Volto's blocks.
  const { dataAdapter } = config.blocks.blocksConfig.eventCalendar;

  const schema = Schema({ data, intl });

  // The sort options come from the querystring of the editor, which the
  // endpoint does not have, so they are set here and not in the schema.
  schema.properties.sortOnOptions.items = {
    choices: Object.keys(sortable_indexes).map((k) => [
      k,
      sortable_indexes[k].title,
    ]),
  };

  const { query = {} } = data || {};
  // We don't need deep compare here, as this is just json serializable data.
  const deepQuery = JSON.stringify(query);

  useEffect(() => {
    onTriggerSearch(
      '',
      data?.facets,
      data?.query?.sort_on || 'start',
      data?.query?.sort_order || 'ascending',
    );
  }, [deepQuery, onTriggerSearch, data]);

  return (
    <>
      <SearchBlockViewComponent
        {...props}
        path={getBaseUrl(props.pathname)}
        mode="edit"
      />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          onChangeField={(id, value) => {
            dataAdapter({
              block,
              data,
              id,
              onChangeBlock,
              value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          navRoot={navRoot}
          contentType={contentType}
          errors={blocksErrors}
        />
      </SidebarPortal>
    </>
  );
};

export default compose(withQueryString, withSearch())(SearchBlockEdit);
