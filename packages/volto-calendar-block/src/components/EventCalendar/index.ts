import type { BlockConfigBase } from '@plone/types';
import calendarSVG from '@plone/volto/icons/calendar.svg';
import SearchBlockViewEvent from './Search/SearchBlockView';
import SearchBlockEditEvent from './Search/SearchBlockEdit';
import SearchBlockSchemaEvent from './Search/schema';

const blockConfig: BlockConfigBase = {
  id: 'eventCalendar',
  title: 'Event Calendar',
  icon: calendarSVG,
  group: 'common',
  view: SearchBlockViewEvent,
  edit: SearchBlockEditEvent,
  blockSchema: SearchBlockSchemaEvent,
  restricted: false,
  mostUsed: false,
  sidebarTab: 1,
};

export default blockConfig;
