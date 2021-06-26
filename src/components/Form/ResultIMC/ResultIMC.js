import React from 'react'
import { View, Text } from 'react-native'

const ResultIMC = ({ messageResultIMC, resultIMC }) => {
    return (
        <View>
            <Text>{messageResultIMC}</Text>
            <Text>{resultIMC}</Text>
        </View>
    )
}

export default ResultIMC