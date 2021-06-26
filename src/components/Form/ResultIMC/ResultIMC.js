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
            <View style={styles.boxShareButton}>
                {resultIMC != null ?
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <Text style={styles.shareText}>
                            Compartilhe
                        </Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
            <Text style={styles.information}>{messageResultIMC}</Text>
            <Text style={styles.numberIMC}>{resultIMC}</Text>
        </View>
    )
}

export default ResultIMC