import React, { Component } from 'react';
import 'config/ReactotronConfig';
import api from 'services/api';

import {
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';

import styles from './styles';
import Lista from './components/Lista';

export default class App extends Component {

  state = {
    data: [],
    base: [],
    loading: true,
    // refreshing: false,
  }

  componentDidMount() {
    this.loadList();
  }

  loadList = async () => {
  // this.setState({ refreshing: true });

    const response = await api.get('tarefa');

    this.setState({ data: response.data });

    /* try {
      const retorno = await this.state.data.lista.map(item => (api.get(`/tarefa/${item}`)));
      this.setState({
        base: retorno.data,
        loading: true,
        refreshing: false,
      });
    } catch (err) {
      console.tron.log('Erro:', err);
    }
    Não excuta o setState, assim n passando a informação,
    não sei como arrumar escrevendo dessa forma,
    por isso realizei essa parte da forma antiga
    */
    const ref = [];
    this.state.data.lista.map(item => {
      api.get(`/tarefa/${item}`)
      .then(result => {
        ref.push(result.data);
        this.setState({
          base: [ref],
          loading: false,
          refreshing: false,
        });
      });
    });
  }

  renderListItem = ({ item }) => <Lista lista={item} />

  renderList = () => (
    <View>
      <FlatList
        data={this.state.data.lista}
        renderItem={this.renderListItem}
        keyExtractor={item => String(item.id)}
        onRefresh={this.loadList}
        refreshing={this.state.refreshing}
      />
    </View>
  );

  /* Pretendia usar FlatList por saber que tem um melhor desempenho, mas não tive sucesso,
     aparentemente tem a ver com a forma que está chegando o this.state.base,
     tentei mudar ele mas n tive sucesso,  a função de render nunca era chaamda */
  /* renderList = ({ dados }) => (
    <ScrollView>
      {dados.map(item => (
        <Lista key={item.id} cidade={item.cidade} bairro={item.bairro} />
        //<Lista cidade={item.cidade} />
       ))}
    </ScrollView>
  );*/

  render() {
    console.tron.log(this.state.base);
    console.tron.log(this.state.data);

    return (
      <View style={styles.conteudo}>
        <StatusBar
          backgroundColor="rgba(206, 138, 20, 1.0)"
          barStyle="light-content"
        />

        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}
