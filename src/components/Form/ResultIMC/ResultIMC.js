import React from 'react'
import { View, Text } from 'react-native'

//styles
import styles from './style'

const ResultIMC = ({ messageResultIMC, resultIMC }) => {
    return (
        <View style={styles.resultIMC}>
            <Text style={styles.information}>{messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{resultIMC}</Text>
        </View>
    )
}

export default ResultIMC