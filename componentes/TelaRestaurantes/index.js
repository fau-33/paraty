import { View, Text, Image } from "react-native";

import Img1 from '../../assets/restaurante01.png';
import Img2 from '../../assets/restaurante02.png';
import Img3 from '../../assets/restaurante03.png';
import estilos from "./estilos";

export default function TelaRestaurantes() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Bares e Restaurantes</Text>
      <Text style={estilos.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>

      <View style={estilos.card}>
        <Image source={Img1} style={estilos.cardImg} />
        <Text style={estilos.cardTitulo}>Armazén Mar</Text>
        <Text>Localização: Rod Rio-Santos</Text>
      </View>
      <View style={estilos.card}>
        <Image source={Img2} style={estilos.cardImg} />
        <Text style={estilos.cardTitulo}>Bendita's Restaurante</Text>
        <Text>Localização: Centro Histórico</Text>
      </View>
      <View style={estilos.card}>
        <Image source={Img3} style={estilos.cardImg} />
        <Text style={estilos.cardTitulo}>SEREIA DO MAR PIZZA-BAR</Text>
        <Text>Localização: Praia do Jabaquara</Text>
      </View>
    </View>
  );
}