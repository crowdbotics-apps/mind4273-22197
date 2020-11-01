import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile166427Navigator from '../features/UserProfile166427/navigator';
import Tutorial166426Navigator from '../features/Tutorial166426/navigator';
import NotificationList166398Navigator from '../features/NotificationList166398/navigator';
import Settings166397Navigator from '../features/Settings166397/navigator';
import Settings166389Navigator from '../features/Settings166389/navigator';
import UserProfile166387Navigator from '../features/UserProfile166387/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile166427: { screen: UserProfile166427Navigator },
Tutorial166426: { screen: Tutorial166426Navigator },
NotificationList166398: { screen: NotificationList166398Navigator },
Settings166397: { screen: Settings166397Navigator },
Settings166389: { screen: Settings166389Navigator },
UserProfile166387: { screen: UserProfile166387Navigator },

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
