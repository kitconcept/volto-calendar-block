import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types';
import installSettings from './config/settings';
import blockConfig from './components/EventCalendar';
import './theme/event-calendar-base.css';
import '@plone/components/dist/basic.css';

declare module '@plone/types' {
  export interface BlocksConfigData {
    eventCalendar: BlockConfigBase;
  }
}

function applyConfig(config: ConfigType) {
  installSettings(config);
  config.blocks.blocksConfig.eventCalendar = blockConfig;

  return config;
}

export default applyConfig;
