import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTailwind } from 'tailwind-rn';

const Header = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />

      <View style={styles.wrapper}>
        <Text style={styles.text}>facebook</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '36%',
            justifyContent: 'space-between',
          }}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialIcon name="add" size={28} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.icon}>
            <TouchableOpacity>
              <MaterialCommunityIcon
                name="facebook-messenger"
                size={28}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.icon}>
            <TouchableOpacity>
              <Icon name="ios-search" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#EEEDEF',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3673CB',
  },
});

export default Header;
