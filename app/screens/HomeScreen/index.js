import { StyleSheet, Text, ScrollView, FlatList, View } from 'react-native'
import React from 'react'
import useHome from './useHome';
import StockCard from './components/StockCard';

const HomeScreen = () => {
  const { data } = useHome();

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={StockCard}
        keyExtractor={item => item.symbol}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    justifyContent: 'space-evenly',
  }
});