import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { globalStyles } from '../../../config/theme/theme';
import { Title } from '../ui/Title';
import { SafeAreaProvider } from 'react-native-safe-area-context';
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
  return (
    <SafeAreaProvider>
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text='Opciones de menu' safe />

      {
        menuItems.map( item => (
          <Pressable key={item.name} style={globalStyles.btnPrimaryText}>
            <Ionicons name={item.icon} size={32} color="green" />
            <Title style={globalStyles.subTitle} text={item.name} icon={item.icon}/>
          </Pressable>
        ))
      }

        </ScrollView>
      </View>
    </View>
        </SafeAreaProvider>
  );
}


