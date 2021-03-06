import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Search from './screens/Search';
import Highlights from './screens/Highlights';
import HighlightsNews from './screens/HighlightsNews';
import Popular from './screens/Popular';
import Latest from './screens/Latest';

import { SearchButton } from 'components/styled';
import * as theme from 'utils/theme';
import i18n from 'i18n';

const iconTrending = ({ tintColor }) => (
  <Icon name="newspaper-o" color={tintColor} size={20} />
);
const iconPopular = ({ tintColor }) => (
  <Icon name="line-chart" color={tintColor} size={20} />
);
const iconLatest = ({ tintColor }) => (
  <Icon name="history" color={tintColor} size={20} />
);
// const iconReactions = () => <Icon name="heart-o" color="#fff" size={20} />;
const iconSearch = <Icon name="search" color={theme.white} size={24} />;

const RootTabs = TabNavigator(
  {
    TrendingTab: {
      screen: Highlights,
      path: '/',
      navigationOptions: {
        title: i18n.t('trendingTitle'),
        tabBarLabel: i18n.t('trendingTitle'),
        tabBarIcon: iconTrending
      }
    },
    PopularTab: {
      screen: Popular,
      path: '/popular',
      navigationOptions: {
        title: i18n.t('popularTitle'),
        tabBarLabel: i18n.t('popularTitle'),
        tabBarIcon: iconPopular
      }
    },
    LatestTab: {
      screen: Latest,
      path: '/latest',
      navigationOptions: {
        title: i18n.t('latestTitle'),
        tabBarLabel: i18n.t('latestTitle'),
        tabBarIcon: iconLatest
      }
    }
    // ReactionsTab: {
    //   screen: News,
    //   path: '/reactions',
    //   navigationOptions: {
    //     title: i18n.t('reactionsTitle'),
    //     tabBarLabel: i18n.t('reactionsTitle'),
    //     tabBarIcon: iconReactions
    //   }
    // }
  },
  {
    initialRouteName: 'TrendingTab',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: theme.waterMelon,
      inactiveTintColor: theme.warmGrey,
      style: {
        backgroundColor: theme.tabsBackground
      },
      indicatorStyle: {
        backgroundColor: theme.waterMelon
      },
      upperCaseLabel: false
    },
    tabBarPosition: 'bottom'
  }
);

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: RootTabs
    },
    TrendingNews: {
      screen: HighlightsNews,
      path: '/trending/:uid',
      navigationOptions: ({ navigation }) => {
        return {
          title: navigation.state.params.title
        };
      }
    },
    Search: {
      screen: Search,
      path: '/search'
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: ({ navigation, ...args }) => {
      return {
        headerStyle: {
          backgroundColor: theme.headerBackground
        },
        headerTintColor: theme.white,
        headerRight: (
          <SearchButton
            onPress={() => {
              navigation.navigate('Search');
            }}
          >
            {iconSearch}
          </SearchButton>
        )
      };
    }
  }
);

export default AppNavigator;
