import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

//components
import ResultIMC from './ResultIMC/ResultIMC'

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [IMC, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    const IMCCalculator = () => setIMC((weight / (height * height)).toFixed(2))

    const validateIMC = () => {
        if (weight != null && height != null) {
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular novamente")
            return
        } else {
            setIMC(null)
            setTextButton("Calcular IMC")
            setMessageIMC("Preencha o peso e altura")
        }
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeight} 
                placeholder="Ex. 1.75" 
                keyboardType="numeric"
                value={height}
                 />
                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeight} 
                placeholder="Ex. 80" 
                keyboardType="numeric" 
                value={weight}
                />
                <Button onPress={validateIMC} title={textButton} />
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
        </View>
    )
}

export default Form