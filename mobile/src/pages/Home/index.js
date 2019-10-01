import React, { Component } from 'react';
import {
  Container,
  Header,
  HeaderTitle,
  IntroView,
  IntroText,
  ContentView,
  Label,
  InputField,
  ConsultaButton,
  ConsultaButtonText,
  FooterView,
  FooterText,
} from './styles';
import api from '../../services/api';

export default class Home extends Component {
  state = {
    words: '',
  };

  handleInput = text => {
    const input = text.toLowerCase().replace(/\s\s+/gi, ' ');
    this.setState({ words: input });
  };

  handleConsulta = async () => {
    const { words } = this.state;
    const { navigation } = this.props;
    const data = {
      palavras: words.replace(/\s+/gi, ' ').split(' '),
    };

    const response = await api.post('/arts', data);

    navigation.navigate('Artigos', { artigos: response.data });
  };

  render() {
    const { words } = this.state;
    return (
      <Container>
        <Header>
          <HeaderTitle>ExtraJuri</HeaderTitle>
        </Header>
        <IntroView>
          <IntroText>
            A forma mais fácil de encontrar artigos jurídicos
          </IntroText>
        </IntroView>
        <ContentView>
          <Label>Digite as palavras chaves:</Label>
          <InputField
            multiline
            autoCapitalize="none"
            placeholder="ex:  banco concurso salario"
            numberOfLines={3}
            maxLength={180}
            value={words}
            onChangeText={text => this.handleInput(text)}
          />
          <ConsultaButton onPress={this.handleConsulta}>
            <ConsultaButtonText>Consultar</ConsultaButtonText>
          </ConsultaButton>
        </ContentView>
        <FooterView>
          <FooterText>GC APPs / UFRN - Alguns direitos reservados</FooterText>
        </FooterView>
      </Container>
    );
  }
}
