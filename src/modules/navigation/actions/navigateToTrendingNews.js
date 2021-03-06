import { NavigationActions } from 'react-navigation';

import applyNavActionToState from './helpers/applyNavActionToState';

function navigateToTrendingNews({ state, props }) {
  const action = NavigationActions.navigate({
    routeName: 'TrendingNews',
    params: {
      uid: props.uid,
      title: props.title,
    }
  });

  applyNavActionToState(state, action);
}

export default navigateToTrendingNews;
