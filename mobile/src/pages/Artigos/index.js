import React, { Component } from 'react';

import { Container, List, CardView, CardName, CardFreq } from './styles';

export default class Artigos extends Component {
  state = {
    artigos: [],
  };

  componentDidMount() {
    const { navigation } = this.props;
    const artigos = navigation.getParam('artigos');
    this.setState({ artigos });
  }

  render() {
    const { artigos } = this.state;
    return (
      <Container>
        <List
          data={artigos}
          keyExtractor={item => item.nome}
          renderItem={({ item }) => (
            <CardView>
              <CardName>{item.nome}</CardName>
              <CardFreq>{item.frequencia}%</CardFreq>
            </CardView>
          )}
        />
      </Container>
    );
  }
}
