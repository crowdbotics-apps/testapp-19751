import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings93653Navigator from '../features/Settings93653/navigator';
import Settings93645Navigator from '../features/Settings93645/navigator';
import UserProfile93643Navigator from '../features/UserProfile93643/navigator';
import UserProfile93612Navigator from '../features/UserProfile93612/navigator';
import Tutorial93611Navigator from '../features/Tutorial93611/navigator';
import NotificationList93583Navigator from '../features/NotificationList93583/navigator';
import Settings93582Navigator from '../features/Settings93582/navigator';
import Settings93574Navigator from '../features/Settings93574/navigator';
import UserProfile93572Navigator from '../features/UserProfile93572/navigator';
import ArticleList193550Navigator from '../features/ArticleList193550/navigator';
import Camera393548Navigator from '../features/Camera393548/navigator';
import EmailAuth493547Navigator from '../features/EmailAuth493547/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings93653: { screen: Settings93653Navigator },
Settings93645: { screen: Settings93645Navigator },
UserProfile93643: { screen: UserProfile93643Navigator },
UserProfile93612: { screen: UserProfile93612Navigator },
Tutorial93611: { screen: Tutorial93611Navigator },
NotificationList93583: { screen: NotificationList93583Navigator },
Settings93582: { screen: Settings93582Navigator },
Settings93574: { screen: Settings93574Navigator },
UserProfile93572: { screen: UserProfile93572Navigator },
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
