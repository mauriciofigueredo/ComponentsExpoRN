import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import { colors } from '../../config/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props {
    name: string;
    icon: string;
    component: string;
}

export const MenuItem = ({name, icon, component}: Props) => {
  return (
    <Pressable
        onPress={()=>console.log(' tab  o click')}
    >
        <View style={{
            ...styles.container,
            backgroundColor: colors.cardBackground
        }}>
            <Ionicons name={icon} size={25} style={{marginRight: 10}} color={colors.primary} />
            <Text style={{color: colors.text}}>{name}</Text>
            <Ionicons name='chevron-forward-outline' size={25} style={{marginLeft: 'auto'}} color={colors.primary} />

        </View>

    </Pressable>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        }

})