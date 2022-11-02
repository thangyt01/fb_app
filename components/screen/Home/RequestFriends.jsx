import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Avatar from '../../common/Avatar';

const Friend = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <Avatar width={90} height={90} />

      <View
        style={{
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
          }}
        >
          Your name
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: '#3673cb',
              borderRadius: 5,
              marginRight: 10,
            }}
          >
            <Text style={{ color: 'white' }}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: '#E5E7EC',
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'black' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const RequestFriends = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            marginRight: 20,
          }}
        >
          Friends
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: '#E5E7EC',
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Suggestions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: '#E5E7EC',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Your Friends
            </Text>
          </TouchableOpacity>
        </View>
      </>
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10,
                marginRight: 20,
              }}
            >
              Friend request
            </Text>
            <Text style={{ fontSize: 20, color: 'red' }}>69</Text>
          </View>

          <Text
            style={{
              color: '#3673cb',
            }}
          >
            See All
          </Text>
        </View>
        <ScrollView>
          <Friend />
          <Friend />
        </ScrollView>
      </>
    </View>
  );
};

export default RequestFriends;
