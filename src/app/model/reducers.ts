import {configName, configReducer} from 'modules/config/model/reducers';
import {exampleName, exampleReducer} from 'modules/example/model/reducers';
import {localeName, localeReducer} from 'modules/locale/model/reducers';
import {statusName, statusReducer} from 'modules/status/model/reducers';
import {combineReducers} from 'redux';
import {unitName, unitReducer} from 'modules/unit/model/reducers';

export const rootReducer = combineReducers({
  [configName]: configReducer,
  [exampleName]: exampleReducer,
  [localeName]: localeReducer,
  [statusName]: statusReducer,
  [unitName]: unitReducer,
});
