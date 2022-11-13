import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { editProfile } from '../../api/auth';
import StyledButton from '../common/Button';

const MyRow = ({ title, icon, value, field, setInputForm, inputForm }) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <View>
        <View style={[styles.itemsCenter, styles.flexRow]}>
          <AntDesignIcon name={icon} size={20} />
          <Text style={{ margin: 5 }}>{field}</Text>
        </View>
        <TextInput
          value={value}
          style={styles.textInput}
          onChangeText={text => setInputForm({ ...inputForm, [field]: text })}
        />
      </View>
    </View>
  );
};

const BottomSheetEditProfile = React.forwardRef(
  ({ title, data, snapPoints }, ref) => {
    const [name, address, company, twitterLink, githubLink] = data;

    const [inputForm, setInputForm] = useState({
      name: name.value,
      address: address.value,
      company: company.value,
      twitterLink: twitterLink.value,
      githubLink: githubLink.value,
    });

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
      mutationFn: body => editProfile(body),
      onSuccess: () => {
        console.log('Success');
        queryClient.invalidateQueries({ queryKey: ['my-profile'] });
      },
    });

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        containerStyle={{
          backgroundColor: '#343434cc',
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <View style={styles.form}>
          <BottomSheetScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingBottom: 20 }}>
              <MyRow
                field={name.field}
                icon={name.icon}
                title={name.title}
                value={inputForm.name}
                setInputForm={setInputForm}
                inputForm={inputForm}
              />
              <MyRow
                field={address.field}
                icon={address.icon}
                title={address.title}
                value={inputForm.address}
                setInputForm={setInputForm}
                inputForm={inputForm}
              />
              <MyRow
                field={company.field}
                icon={company.icon}
                title={company.title}
                value={inputForm.company}
                setInputForm={setInputForm}
                inputForm={inputForm}
              />
              <MyRow
                field={twitterLink.field}
                icon={twitterLink.icon}
                title={twitterLink.title}
                value={inputForm.twitterLink}
                setInputForm={setInputForm}
                inputForm={inputForm}
              />
              <MyRow
                field={githubLink.field}
                icon={githubLink.icon}
                title={githubLink.title}
                value={inputForm.githubLink}
                setInputForm={setInputForm}
                inputForm={inputForm}
              />
            </View>
          </BottomSheetScrollView>
          <StyledButton
            title="SUBMIT"
            styles={{ padding: 10 }}
            onPress={() => mutate({ firstname: inputForm.name })}
          />
        </View>
      </BottomSheetModal>
    );
  },
);

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 10,
    padding: 5,
    borderRadius: 10,
    borderColor: 'gray',
  },
  flexRow: {
    flexDirection: 'row',
  },
  form: {
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BottomSheetEditProfile;
