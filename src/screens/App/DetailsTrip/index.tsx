import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import TextView from 'atoms/TextView'
import Svg from 'atoms/Svg'
import Button from 'components/molecules/Button'
import languages from 'values/languages'

const DetailsTrip = () => {
  const lang = 'ar'
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Text>image</Text>
      </View>
      
      <View style={styles.text}>
          <TextView title={languages[lang].divingActivity} style={styles.title}/>

          <View style={[styles.svgAndStar , lang === 'ar' ? styles.arabic:null]}>
            <Svg name='smile'/>
            <TextView title={languages[lang].hestegal} style={styles.subTitle}/>
            <Svg name='star'size={17} />
            <TextView title={'(3.4)'}/>
          </View>

          <View>
            <TextView title={languages[lang].description} style={styles.descriptionTitle} />
            <TextView style={styles.descriptionText} title={languages[lang].lorem}/>
          </View>
      </View>

      <View style={[styles.bottom , lang === 'ar' ? styles.arabic:null]}>
        <TextView title={languages[lang].LE} style={styles.price}/>
        <Button type='book' label={'Book Now'} />
      </View>
    </View>
  )
}

export default DetailsTrip