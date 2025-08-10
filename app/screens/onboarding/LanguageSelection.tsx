// LanguageSelectionScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';

const languages = [
  { id: 'bn', label: 'বাংলা', symbol: 'বা' },
  { id: 'en', label: 'English', symbol: 'E' },
  { id: 'gu', label: 'ગુજરાતી', symbol: 'ગુ' },
  { id: 'hi', label: 'हिंदी', symbol: 'ह' },
  { id: 'kn', label: 'ಕನ್ನಡ', symbol: 'ಕ' },
  { id: 'ml', label: 'മലയാളം', symbol: 'മ' },
  { id: 'mr', label: 'मराठी', symbol: 'म' },
  { id: 'ta', label: 'தமிழ்', symbol: 'த' },
  { id: 'te', label: 'తెలుగు', symbol: 'తె' },
  { id: 'ur', label: 'اردو', symbol: 'دو' },
];

const numColumns = 3;
const itemSize = Dimensions.get('window').width / numColumns - 40;

export default function LanguageSelectionScreen() {
  const [selectedLang, setSelectedLang] = useState('en');
  const router = useRouter();

  const renderItem = ({ item }: any) => {
    const isSelected = selectedLang === item.id;
    return (
      <TouchableOpacity
        onPress={() => setSelectedLang(item.id)}
        style={styles.itemContainer}
      >
        <View
          style={[
            styles.circle,
            isSelected ? styles.circleSelected : styles.circleUnselected,
          ]}
        >
          <Text style={styles.symbol}>{item.symbol}</Text>
        </View>
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const onDone = () => {
  router.push({
    pathname: '/screens/onboarding/EnvisionScreen',
    params: { selectedLang },
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a language</Text>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
      />
      <Pressable style={styles.doneButton} onPress={onDone}>
        <Text style={styles.doneText}>DONE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#145b5b',
  },
  grid: {
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
    width: itemSize,
    
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  circleSelected: {
    backgroundColor: '#2b8d8d',
    borderColor: '#145b5b',
  },
  circleUnselected: {
    backgroundColor: '#e8fafa',
    borderColor: '#145b5b',
  },
  symbol: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    color: '#145b5b',
  },
  doneButton: {
    marginTop: 30,
    marginBottom: 100,
    backgroundColor: '#145b5b',
    paddingVertical: 15,
    borderRadius: 6,
    alignItems: 'center',
  },
  doneText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
