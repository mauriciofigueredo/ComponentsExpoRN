import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import { colors } from '../../config/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props {
    name: string;
    icon: string;
    component: string;
    isFirst?: boolean;
    isLast?:boolean;
}

export const MenuItem = ({name, icon, component, isFirst=false, isLast=false}: Props) => {
  return (
    <Pressable
        onPress={()=>console.log(' tab  o click')}
    >
        <View style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {borderTopLeftRadius: 10, borderTopRightRadius:10, paddingTop:10}),
            ...(isLast && {borderBottomLeftRadius: 10, borderBottomRightRadius:10, paddingBottom: 10})
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