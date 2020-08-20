import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';

import {ToanWeapons} from '../../resources/darkcloud/weapons/ToanWeapons';

export class WeaponsPage extends Component {
  render() {
    return (
      <Container>
        <Content>
          {ToanWeapons.map((weapon, index) => (
            <Card>
              <CardItem header>
                <Text>{weapon.name}</Text>
              </CardItem>
              <CardItem cardBody>
                <Image
                  key={index}
                  source={weapon.image}
                  style={{height: 50, width: 50, flex: 0, marginLeft: 20}}
                />
              </CardItem>
              <CardItem footer>
                <Text>{weapon.description}</Text>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}
