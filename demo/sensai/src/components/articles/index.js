import router from 'pow-router';
import { actionFetchApi } from '../../store/actions'
import { REQUEST_TYPE, ACTION_TYPE } from '../../store/consts'

import './index.scss'

router.Component('Articles', {

  template: `Articles`,

  onCreate() {
    window.store.dispatch(actionFetchApi(ACTION_TYPE.SENSAI_LIST, {
      offset: 0
    }))
  },

  onStart() {

  },

  onStop() {

  }

});
