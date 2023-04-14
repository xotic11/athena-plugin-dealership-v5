import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { DefaultDealerships } from './src/defaults';
import { DealershipView } from './src/view';

const PLUGIN_NAME = 'Athena Dealership';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    DealershipView.init();
    DefaultDealerships.init();
    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
