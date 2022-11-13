import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { pickImage };
