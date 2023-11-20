import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const ViewJosue = ({ navigation }) => {
  const details = {
    name: 'Josué Elias',
    age: 28,
    occupation: 'Developer',
    bio:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque libero vel massa commodo, id ultricies odio ultrices.',
  };

    // Estado para controlar a visibilidade do modal
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

  return (
    <LinearGradient
      colors={['rgb(255, 22, 202)', 'rgb(108, 4, 98)', 'rgb(24, 23, 21)', 'rgb(18, 18, 18)']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <Image source={require('../../../assets/josue.jpeg')} style={styles.image} />
          <View style={styles.nameAndButton}>
            <Text style={styles.name}>{details.name}</Text>
            <Image source={require("../../../assets/iconPlay.png")} style={{ width: 50, height: 50, marginRight: 10}}/>
          </View>
          <View style={styles.bandaDetails}>
            <Image source={require('../../../assets/postMalone.jpeg')} style={styles.banda} />
            <Text style={styles.nomeBanda}>Post Malone</Text>
          </View>
          <View style={styles.album}>
            <Text style={styles.albumInfo}>Post Malone ° 2005</Text>
          </View>
          <View style={styles.function}>
            <Image source={require('../../../assets/functions.png')} style={styles.functionImage} />
          </View>
          <TouchableOpacity onPress={() => setModalVisible1(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Mente de estudante remoto</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Congratulations</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible2(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Vida nova</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Congratulations</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible3(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Responsabilidades da vida</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Congratulations</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible4(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>E o TCC???</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>Congratulations</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal - Primeiro Ano Arthur */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Primeiro Ano - Mente de estudante remoto</Text>
                <Text style={styles.paragraphText}>
                  No início, rotina remota, desafio a enfrentar,Amigos distantes, ansiedade a brotar.Tempo de reflexão, evolução mental,Foco constante, notas máximas, meta final.
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(108, 4, 98)" }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - Segundo Ano Arthur */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Segundo Ano - Vida nova</Text>
                <Text style={styles.paragraphText}>
                  Rotina mudada, novas pessoas, amigos conquistados, Amor encontrado, hoje minha namorada, destino traçado. Diretor do grêmio, lazer e esporte comandei, Interséries organizado, com minha turma venci, celebrei.Na festa junina, segundo lugar alcançado,História escrita, memórias do passado.
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(108, 4, 98)" }}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - Terceiro Ano Arthur */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            setModalVisible3(!modalVisible3);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>Terceiro ano - Responsabilidades da vida</Text>
                <Text style={styles.paragraphText}>
                Iniciei o TCC, desafio acadêmico a encarar, Líder de turma, responsabilidades a guiar. Estresse presente, fardo do liderar, Segundo lugar na festa junina, a história a continuar.                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(108, 4, 98)" }}
                onPress={() => {
                  setModalVisible3(!modalVisible3);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - TCC */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
            setModalVisible4(!modalVisible4);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Retângulo azul */}
              <View style={styles.blueRectangle}>
                <Text style={styles.lettraText}>E o TCC???</Text>
                <Text style={styles.paragraphText}>
                Iniciei o TCC, desafio acadêmico a encarar, Líder de turma, responsabilidades a guiar. Estresse presente, fardo do liderar, Segundo lugar na festa junina, a história a continuar.                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(108, 4, 98)" }}
                onPress={() => {
                  setModalVisible4(!modalVisible4);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    marginTop: 70,
  },
  nameAndButton: {
   flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    marginRight: 140,
  },
  banda: {
    width: 28,
    height: 27,
    borderRadius: 10,
    marginRight: 10,
  },
  bandaDetails: {
    flexDirection: 'row',
    marginRight: 220,
  },
  nomeBanda: {
    fontSize: 14,
    color: 'white',
    textAlignVertical: 'center',
  },
  album: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 220,
    width: '100%',
  },
  albumInfo: {
    color: '#B3B3B3',
    fontSize: 13,
  },
  function: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 204,
  },
  functionImage: {
    width: 150,
    height: 30,
  },
  detailsText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  bloco: {
    marginEnd: 'auto',
    marginLeft: 10,
    marginTop: 20,
  },
  blocoNome: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto',
  },
  autor: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
  },
  autorNome: {
    color: '#B3B3B3',
    fontSize: 14,
    textAlignVertical: 'center',
  },
  iconDownload: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  iconOptions: {
    width: 25,
    height: 6,
    marginTop: 8,
    marginLeft: 180,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    backgroundColor: "rgb(108, 4, 98, 0.5)", 
    borderRadius: 10,
    width: '80%',
    height: '65%',
    padding: 10,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  blueRectangle: {
    backgroundColor: "rgb(108, 4, 98)",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  lettraText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center'
  },
  paragraphText: {
    color: "white",
    fontSize: 16,
    textAlign: "justify",
  },
});

export default ViewJosue;
