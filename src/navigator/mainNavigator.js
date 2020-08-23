import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList193550Navigator from '../features/ArticleList193550/navigator';
import Camera393548Navigator from '../features/Camera393548/navigator';
import EmailAuth493547Navigator from '../features/EmailAuth493547/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList193550: { screen: ArticleList193550Navigator },
Camera393548: { screen: Camera393548Navigator },
EmailAuth493547: { screen: EmailAuth493547Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
