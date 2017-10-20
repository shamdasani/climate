// Import React
import React from 'react'

import styled from 'styled-components'

import TempVariationGraph from './TempVariationGraph'
import GlobalAvgTemp from './GlobalAvgTemp'

// Import Spectacle Core tags
import {
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Markdown,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
    gray: '#404E5C',
    slate: '#C6D8D3',
    red: '#ff4949',
    green: '#20ee94',
    blue: '#207aee',
    bg: '#f4f4f6',
    black: '#1f2d3d',
    grey: '#8492a6',
    smoke: '#e0e6ed',
    snow: '#f9fafc',
    white: '#ffffff'
  },
  {
    primary: 'Helvetica'
  }
)

const Quote = styled.div`
  color: #e0e6ed;
  text-align: left;
  padding-left: 20px;
  font-size: 1em;
  border-left: 1px solid #e0e6ed;
  margin-bottom: 30px;
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${props => props.c};
  padding: 0;
  margin: 0;
`
const Li = styled.li`
  margin-bottom: 10px;
  font-size: 1em;
  text-align: left;
`

const Color = styled.span`color: ${props => props.c};`
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1280}
        contentHeight={720}
      >
        <Slide transition={['zoom']} bgColor="bg">
          <Heading size={1} fit lineHeight={1} textColor="black">
            Man vs. Nature
          </Heading>
          <Text margin="10px 0 0" textColor="black" size={1} fit bold>
            Past data, present actions, and future effects of climate change
          </Text>
          <Text margin="10px 0 0" textColor="black" size={1} bold>
            ~
          </Text>

          <Text margin="10px 0 0" textColor="black" size={1} bold>
            Samay Shamdasani{' '}
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Quote>
            We are not born as helpers of nature, but competitors with nature.
            We are its bond-masters, but we bind ourselves down. Why is this
            house here? Nature did not build it. Nature says, go and live in the
            forest. Man says, I will build a house and fight with nature, and he
            does so. The whole history of humanity is a continuous fight against
            the so-called laws of nature, and man gains in the end. Coming to
            the internal world, there too the same fight is going on, this fight
            between the animal man and the spiritual man, between light and
            darkness; and here too man becomes victorious.
          </Quote>
          <Text textColor="slate" textAlign="left" italic>
            - Vivekananda, Jnana Yoga
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Title c="#fff">Why so late?</Title>
          <Li>Homo Sapiens have been around for nearly 200,000 years</Li>
          <Li>Agriculture had only been developed about 12,000 years ago</Li>
          <Li>
            Did it really take us 188,000 years to figure out how to grow food?
            What stopped us from discovering agriculture earlier?
          </Li>
        </Slide>
        <Slide transition={['fade']} bgColor="smoke">
          <Title textColor="secondary">Global Average Temperature </Title>
          <GlobalAvgTemp />
        </Slide>
        <Slide transition={['fade']} bgColor="black">
          <Title c="#e0e6ed">
            <Color c="#20ee94">Human greenhouse gas emissions</Color> are the
            cause.
          </Title>
          <TempVariationGraph />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Title c="#1f2d3d">
            Consequences (islands sinking, glaciers melting, chaos)
          </Title>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Title c="#1f2d3d">
            Present Solutions (paris climate, india 2020, electric, going green)
          </Title>
        </Slide>
      </Deck>
    )
  }
}
