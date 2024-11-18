import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { ThemedText } from '../../components/ThemedText'

const ChatIdScreen = () => {
  const { id } = useLocalSearchParams()

  return (
    <View style={{ marginHorizontal: 10 }}>
      <ThemedText
        style={{
          fontSize: 25,
          marginBottom: 10
        }}
      >
        Chat ID: ${id}
      </ThemedText>
    </View>
  )
}

export default ChatIdScreen
