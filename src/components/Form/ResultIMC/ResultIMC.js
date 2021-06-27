import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'

//styles
import styles from './style'

const ResultIMC = ({ messageResultIMC, resultIMC }) => {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC é ${resultIMC}`
        })
    }

    return (
        <View style={styles.resultIMC}>
            <Text style={styles.information}>{messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{resultIMC}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                    <Text style={styles.shareText}>
                        Compartilhe
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ResultIMC