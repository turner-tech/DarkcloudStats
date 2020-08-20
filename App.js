import React, {Component} from 'react';

import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Button,
  Left,
  Right,
  StyleProvider,
  Icon,
} from 'native-base';

import getTheme from './native-base-theme/components';

import {WeaponsPage} from './components/darkcloud/WeaponsPage';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
          <Header>
            <Left>
              <Button transparent>{/* <Icon name="menu" /> */}</Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <WeaponsPage></WeaponsPage>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
