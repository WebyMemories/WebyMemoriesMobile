import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const ViewVitorHugo = ({ navigation }) => {
  const details = {
    name: 'Vitor Hugo',
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
      colors={['rgb(168, 152, 112)', 'rgb(100, 29, 23)', 'rgb(39, 21, 19)', 'rgb(18, 18, 18)']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="chevron-left" size={20} color="black" />
          </TouchableOpacity>
          <Image source={require('../../../assets/vitor.jpeg')} style={styles.image} />
          <View style={styles.nameAndButton}>
            <Text style={styles.name}>{details.name}</Text>
            <Image source={require("../../../assets/iconPlay.png")} style={{ width: 50, height: 50, marginRight: 10}}/>
          </View>
          <View style={styles.bandaDetails}>
            <Image source={require('../../../assets/bandaVitorHugo.jpg')} style={styles.banda} />
            <Text style={styles.nomeBanda}>Teeth</Text>
          </View>
          <View style={styles.album}>
            <Text style={styles.albumInfo}>Teeth ° 2006</Text>
          </View>
          <View style={styles.function}>
            <Image source={require('../../../assets/functions.png')} style={styles.functionImage} />
          </View>
          <TouchableOpacity onPress={() => setModalVisible1(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>Catástrofe</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>5 Seconds of Summer</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible2(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>A Reconstrução</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>5 Seconds of Summer</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible3(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>A Queda</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>5 Seconds of Summer</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible4(true)}>
            <View style={styles.bloco}>
              <Text style={styles.blocoNome}>O Abalo</Text>
              <View style={styles.autor}>
                <Image source={require('../../../assets/iconDownload.png')} style={styles.iconDownload} />
                <Text style={styles.autorNome}>5 Seconds of Summer</Text>
                <Image source={require('../../../assets/iconOptions.png')} style={styles.iconOptions} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Modal - Primeiro Ano Vitor */}

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
                <Text style={styles.lettraText}>Primeiro Ano - Catástrofe</Text>
                <Text style={styles.paragraphText}>
                  Organizar estudos, casa, um desafio persistente, Aulas com Cleber, HTML e CSS, aprendizado presente.Pena não explorar uma linguagem mais prática,Dificuldades superadas, a jornada é enfática.                
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(100, 29, 23)" }}
                onPress={() => {
                  setModalVisible1(!modalVisible1);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - Segundo Ano Vitor */}

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
                <Text style={styles.lettraText}>Segundo Ano - A Reconstrução</Text>
                <Text style={styles.paragraphText}>
                  Ávido pelo retorno às aulas, hardware dominado com fervor, Armando ensinou, Braga com PHP, meu primeiro tutor. Conhecimentos vastos, projetos aguardados, ansiei, Falta a oportunidade de tudo que aprendi aplicar, desejei.                
                </Text>
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(100, 29, 23)" }}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        {/* Modal - Terceiro Ano Vitor */}

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
                <Text style={styles.lettraText}>Terceiro ano - A Queda</Text>
                <Text style={styles.paragraphText}>
                  Concursos, vestibulares, Enem, TCC, desafios a superar, Tempo veloz, segundas repetitivas a ecoar. "Sextou com 'S'" nas sextas, lembretes animados, Trabalhos, apresentações, notas variadas, momentos aguardados. Significados perdidos, notas sem valor percebido, Deveria ter aproveitado, o aprendizado contido. 
                </Text>             
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(100, 29, 23)" }}
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
                <Text style={styles.lettraText}>O Abalo</Text>
                <Text style={styles.paragraphText}>
                  Noites dedicadas, finais de semana focado e manhãs pensativas, uma preocupação que já mais entenderia. Anscioso pela demonstração do meu sistema, fui abalado pelo apresentado, procurava os empresários e o que tive foi um alastro. 
                </Text>              
              </View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "rgb(100, 29, 23)" }}
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
    width: 260,
    height: 235,
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
    marginRight: 170,
  },
  banda: {
    width: 28,
    height: 27,
    borderRadius: 10,
    marginRight: 10,
  },
  bandaDetails: {
    flexDirection: 'row',
    marginRight: 270,
  },
  nomeBanda: {
    fontSize: 14,
    color: 'white',
    textAlignVertical: 'center',
  },
  album: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 260,
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
    marginLeft: 150,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContent: {
    backgroundColor: "rgb(100, 29, 23, 0.5)", // Código de cor azul com 80% de opacidade
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
    backgroundColor: "rgb(100, 29, 23)",
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

export default ViewVitorHugo;
