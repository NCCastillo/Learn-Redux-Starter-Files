import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import  rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  // es6. If key and value are the same name then we don't need to add the key/value pair. 
  // this would be the same as posts: posts, comments: comments
  posts,
  comments
};

const store createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
