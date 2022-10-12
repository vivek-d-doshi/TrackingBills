import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const FirstPage = (props: Props) => {
  return (

    <View style={Style.parentContanier}>
        <View style={Style.childContanier}>
        <Text>Hello World!</Text>
        </View>
    </View>
  )
}

const Style = StyleSheet.create({
    parentContanier :{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        flex:1
    },
    childContanier:{
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        flex:0.1
    }
})

export default FirstPage