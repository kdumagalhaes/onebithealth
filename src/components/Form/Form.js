import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration } from 'react-native'

//components
import ResultIMC from './ResultIMC/ResultIMC'

//styles
import styles from './style'

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura")
    const [IMC, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")
    const [errorMessage, setErrorMessage] = useState(null)

    const IMCCalculator = () => setIMC((weight / (height * height)).toFixed(2))

    const verificateIMC = () => {
        Vibration.vibrate()
        if (IMC === null) {
            setErrorMessage("Campo obrigatório*")
        }
    }

    const validateIMC = () => {
        if (weight != null && height != null) {
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
            return
        } else {
            verificateIMC()
            setIMC(null)
            setTextButton("Calcular IMC")
            setMessageIMC("Preencha o peso e altura")
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                    value={height}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    placeholder="Ex. 80"
                    keyboardType="numeric"
                    value={weight}
                />
                <TouchableOpacity
                    onPress={() => validateIMC()}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
        </View>
    )
}

export default Form