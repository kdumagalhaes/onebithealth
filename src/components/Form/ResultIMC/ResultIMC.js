import React from 'react'
import { View, Text } from 'react-native'

const ResultIMC = ({ messageResultIMC, resultIMC }) => {
    return (
        <View>
            <Text>{resultIMC}</Text>
            <Text>{messageResultIMC}</Text>
        </View>
    )
}

export default ResultIMC