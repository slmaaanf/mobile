import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Contact from './Contact';

const friends = [
  {
    id: '1',
    nama: 'Salma Nurfauziah',
    telpon: '081293794212',
    gambar: require('../assets/salma.jpg'),
    deskripsi: 'Mahasiswa.',
  },
  {
    id: '2',
    nama: 'Sehun',
    telpon: '000112200',
    gambar: require('../assets/sehun.jpg'),
    deskripsi: 'Aktor',
  },
  {
    id : '3',
    nama : 'Hawarizmi',
    telpon : '220099333',
    gambar : require('../assets/images.jpeg'),
    deskripsi : 'Mahasiswa',
  },
  {
    id : '4',
    nama : 'Shakira',
    telpon : '445511009',
    gambar : require('../assets/win.jpeg'),
    deskripsi : 'Mahasiswa'
  }
  // Tambahkan teman-teman lainnya di sini
];

const Home = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contact
            judul={item.nama}
            telpon={item.telpon}
            gambar={item.gambar}
            onPress={() => navigation.navigate('Details', { friend: item })}
          />
        )}
      />
    </View>
  );
};

export default Home;
