import React, { Fragment, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import BottomSheetComment from '../../sheets/BottomSheetComment';
import Divider from '../Divider';

const Footer = ({ comments, likes, shares }) => {
  const commentSheetModalRef = useRef(null);

  const [likesState, setLikesState] = useState(likes);
  const [sharesState, setSharesState] = useState(shares);

  // likes -> check id -> boolean
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  const onLike = () => {
    setLikesState(value => value + 1);
    setLiked(true);
  };

  const onDislike = () => {
    setLikesState(value => value - 1);
    setLiked(false);
  };

  const onShare = () => {
    setSharesState(value => value + 1);
    setShared(true);
  };

  const onUnshare = () => {
    setSharesState(value => value - 1);
    setShared(false);
  };

  return (
    <Fragment>
      <TouchableOpacity onPress={() => commentSheetModalRef.current.present()}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {liked ? (
              <AntDesignIcon name="like1" size={15} color="#3673cb" />
            ) : (
              <AntDesignIcon name="like2" size={15} />
            )}
            <Text>{likesState}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text>{comments} comments</Text>
            <Text> - </Text>
            <Text>{sharesState} shares</Text>
          </View>
        </View>
      </TouchableOpacity>

      <Divider
        height={1}
        styles={{
          marginHorizontal: -10,
          marginBottom: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 5,
        }}
      >
        {liked ? (
          <AntDesignIcon
            name="like1"
            size={20}
            color="#3673cb"
            onPress={onDislike}
          />
        ) : (
          <AntDesignIcon name="like2" size={20} onPress={onLike} />
        )}
        <AntDesignIcon
          name="message1"
          size={20}
          onPress={() => commentSheetModalRef.current.present()}
        />
        {shared ? (
          <AntDesignIcon
            name="sync"
            size={20}
            color="green"
            onPress={onUnshare}
          />
        ) : (
          <AntDesignIcon name="sync" size={20} onPress={onShare} />
        )}
      </View>

      <BottomSheetComment
        ref={commentSheetModalRef}
        data={[...Array(20).keys()]}
        likes={likesState}
        liked={liked}
        onLike={onLike}
        onDislike={onDislike}
      />
    </Fragment>
  );
};

export default Footer;
