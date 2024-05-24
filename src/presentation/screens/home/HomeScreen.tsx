import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MenuItem } from '../../ui/MenuItem';
import { Title } from '../../ui/Title';
// import { ScrollView } from 'react-native-gesture-handler';


export const menuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },


  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },

  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
]; 
export const HomeScreen = () => {
  const titulo = 'Opciones de menu'
  return (
    <SafeAreaProvider>
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
        <Title text={ titulo } safe />
      {
        menuItems.map( item => (
          <MenuItem {...item} />
        ))
      }

        </ScrollView>
      </View>
    </View>
        </SafeAreaProvider>
  );
}


