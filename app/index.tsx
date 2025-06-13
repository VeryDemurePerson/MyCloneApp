import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
  Button,
} from 'react-native';

type Pin = {
  id: string;
  title: string;
  image: any;
  height: number;
};

const pins: Pin[] = [
  { id: '1', title: 'Calgary View', image: require('../assets/images/calgary.jpg'), height: 230 },
  { id: '2', title: 'Italy Streets', image: require('../assets/images/italy.jpg'), height: 300 },
  { id: '3', title: 'Sicily Coast', image: require('../assets/images/sicily.jpg'), height: 200 },
  { id: '4', title: 'Spain Culture', image: require('../assets/images/spain.jpg'), height: 270 },
  { id: '5', title: 'Barcelona Vibes', image: require('../assets/images/barcelona.jpg'), height: 240 },
  { id: '6', title: 'The Bahamas', image: require('../assets/images/The Bahamas.jpg'), height: 300 },
  { id: '7', title: 'Malta CoastLines ', image: require('../assets/images/Malta.jpg'), height: 290 },
  { id: '8', title: 'Las Vegas', image: require('../assets/images/Las Vegas.jpg'), height: 250 },
  { id: '9', title: 'Venice', image: require('../assets/images/Venice.jpg'), height: 310 },
  { id: '10', title: 'Lake Louise', image: require('../assets/images/Lake Lousie.jpg'), height: 330 },
  { id: '11', title: 'Times Square', image: require('../assets/images/Times Square.jpg'), height: 260 },
  { id: '12', title: 'Banff-Alberta', image: require('../assets/images/banff.jpg'), height: 320 },
  { id: '13', title: 'Greece', image: require('../assets/images/Greece.jpg'), height: 310 },
];

export default function App() {
  const { width } = useWindowDimensions();
  const numColumns = 2;
  const columnGap = 12;
  const paddingHorizontal = 16;
  const columnWidth = (width - paddingHorizontal * 2 - columnGap * (numColumns - 1)) / numColumns;

  const columns: Pin[][] = Array.from({ length: numColumns }, () => []);
  pins.forEach((pin, index) => {
    columns[index % numColumns].push(pin);
  });

  const renderPin = (item: Pin) => (
    <View key={item.id} style={{ marginBottom: 16 }}>
      <Image
        source={item.image}
        style={{
          height: item.height,
          width: columnWidth,
          borderRadius: 10,
        }}
      />
      <Text style={styles.pinText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.navbar}>
        <View style={styles.branding}>
          <Image source={require('../assets/images/Pinterest-logo.png')} style={styles.logo} />
          <Text style={styles.brandName}>Pinterest</Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Profile tapped')}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.header}>Travel Boards</Text>

      <ScrollView contentContainerStyle={[styles.grid, { paddingHorizontal }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {columns.map((column, colIndex) => (
            <View
              key={colIndex}
              style={{
                flex: 1,
                marginHorizontal: columnGap / 2,
              }}
            >
              {column.map(renderPin)}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="logo-pinterest" size={24} color="black" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-circle-outline" size={24} color="#000" />
          <Text style={styles.navLabel}>Saved</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.alertContainer}>
        <Button title="Alert" onPress={() => Alert.alert('Alert Button pressed')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  navbar: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#E60023',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  header: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  grid: {
    paddingBottom: 16,
  },
  pinText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  alertContainer: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  branding: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 3,
  },
  brandName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },
  navItem: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: '#000',
    marginTop: 2,
  },
});