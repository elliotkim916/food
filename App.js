import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search', // default route
  defaultNavigationOptions: { // title will be text of what appears on the header
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);
// creates a react component and displays whatever content the navigator is producing inside of that component
// just makes sure we export a react component from this file