import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons'
interface Props {
    text: string;
    icon?: string;
    component?: string;
    safe?:boolean;
    white?:boolean;
}

export const Title = ({text, safe=false, white=false}:Props) => {
  
  const {top}=useSafeAreaInsets();
  return (
        <Text style={
            {...globalStyles.title,
                marginTop: safe ? top : 0,
                marginBottom: 10,
                color: white ? "white" : colors.text
            }
            }>{text}</Text>
  )
}
