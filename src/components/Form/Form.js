import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

//components
import ResultIMC from './ResultIMC/ResultIMC'

const Form = () => {
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 80" keyboardType="numeric" />
                <Button title="Calcular IMC" />
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
        </View>
    )
}

export default Form