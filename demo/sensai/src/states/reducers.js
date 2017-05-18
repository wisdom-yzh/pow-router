import redux from 'redux';
import action from './actions';

const defaultStore = {
  is_fetching: false,
  data: []
};

function getArticleDetail(store = defaultStore, action) {

}

function appendArticleList(store = defaultStore, action) {

}

export default {
  getArticleDetail,
  appendArticleList,
};