import React from 'react';
import { TextInput, View } from 'react-native';

const Search = styles => {
  return (
    <View style={{ ...styles }}>
      <TextInput
        style={{
          marginLeft: 5,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 15,
          flexGrow: 1,
          backgroundColor: '#eee',
        }}
        placeholder="Search..."
      />
    </View>
  );
};

export default Search;
