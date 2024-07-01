import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Details = ({ route }) => {
  const { friend } = route.params;

  return (
    <View style={styles.container}>
      <Image source={friend.gambar} style={styles.img} />
      <Text style={styles.name}>{friend.nama}</Text>
      <Text style={styles.phone}>{friend.telpon}</Text>
      <Text style={styles.description}>{friend.deskripsi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 18,
    color: '#3498db',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Details;
