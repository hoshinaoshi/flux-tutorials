import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout'; // 親ページ
import Page1 from './components/Page1'; // 子ページを３つインポート
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}> // テンプレートとなる親ページ
      <IndexRoute component={Page1}></IndexRoute> // 子ページ１。デフォルトページ
      <Route path='page2' component={Page2}></Route> // 子ページ２
      <Route path='page3' component={Page3}></Route> // 子ページ３
    </Route>
  </Router>,
app);
