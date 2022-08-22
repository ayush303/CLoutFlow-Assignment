import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const StockCard = ({item}) => {
    console.log(item);
  if(item.symbol !== undefined) {
    return (
        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.tickerSymbol}> {item.symbol} </Text>
            <Text style={styles.tickerPrice}> {item.price} </Text>
          </View>
        </View>
      )
  }
}

export default StockCard

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25,
        backgroundColor: '#D3D3D3',
        height: 100,
        borderRadius: 20,
        color: 'white',
        shadowColor: '#000',
        shadowOffset: {
          with: 5,
          height: 5,
        },
        shadowOpacity: 0.75,
        elevation: 9,
        marginBottom: 10,
        justifyContent: 'center',
      },
      textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'space-around',
      },
      tickerSymbol: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center'
      },

      tickerPrice: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#006400',
        justifyContent: 'center',
      }

})