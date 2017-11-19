// Import React
import React from 'react'

import styled from 'styled-components'

import TempVariationGraph from './TempVariationGraph'
import GlobalAvgTemp from './GlobalAvgTemp'

// Import Spectacle Core tags
import {
  Cite,
  Deck,
  Fit,
  Heading,
  ListItem,
  List,
  Fill,
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
    darkRed: '#e54141',
    green: '#6cfcbd',
    blue: '#207aee',
    bg: '#f4f4f6',
    black: '#1f2d3d',
    grey: '#8492a6',
    smoke: '#e0e6ed',
    snow: '#f9fafc',
    white: '#ffffff'
  },
  {
    primary: 'Georgia, Helvetica, Arial, sans-serif'
  }
)

const Quote = styled.div`
  color: #1f2d3d;
  text-align: left;
  padding-left: 20px;
  font-size: 1.2em;
  border-left: 5px solid #1f2d3d;
  margin-bottom: 30px;
`

const Title = styled.h1`
  font-weight: 400;
  font-size: 2em;
  color: ${props => props.c};
  text-align: left;
  font-family: Helvetica, Arial, sans-serif;
  padding-bottom: 5%;
  margin: 0;
  display: inline-block;
`
const GraphTitle = styled.h1`
  font-weight: 400;
  font-size: 1.5em;
  color: ${props => props.c};
  margin: 0;
  padding: 0;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 1%;
`

const Li = styled.li`
  margin-bottom: 2%;
  font-size: 1.5em;
  text-align: left;
`

const Color = styled.span`
  color: ${props => props.c};
  background: ${props => props.b};
`
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1400}
        contentHeight={800}
      >
        <Slide transition={['zoom']} bgColor="bg">
          <Fill>
            <Heading
              size={1}
              fit
              lineHeight={1}
              textColor="black"
              textFont="Helvetica, Arial, sans-serif"
            >
              Man vs. Nature
            </Heading>
            <Text
              margin="10px 0 0"
              textColor="black"
              textFont="Helvetica, Arial, sans-serif"
              size={1}
              fit
              bold
            >
              Past data, present actions, and future consequences of climate
              change
            </Text>
            <Text margin="10px 0 0" textColor="black" size={1} bold>
              ~
            </Text>

            <Text
              margin="10px 0 0"
              textColor="black"
              textFont="Helvetica, Arial, sans-serif"
              size={1}
              bold
            >
              Samay Shamdasani{' '}
            </Text>
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Fill>
            <Quote>
              We are not born as helpers of nature, but{' '}
              <Color b="#ffa5a5" c="#000">
                competitors
              </Color>{' '}
              with nature. We are its bond-masters, but we bind ourselves down.
              Why is this house here? Nature did not build it. Nature says, go
              and live in the forest. Man says, I will build a house and fight
              with nature, and he does so. The whole history of humanity is a{' '}
              <Color b="#ffa5a5" c="#000">
                {' '}
                continuous fight
              </Color>{' '}
              against the so-called laws of nature, and man gains in the end.
              Coming to the internal world, there too the same fight is going
              on, this fight between the animal man and the spiritual man,
              between{' '}
              <Color b="#ffa5a5" c="#000">
                light and darkness
              </Color>{' '}
              and here too man becomes victorious.
            </Quote>
            <Text textColor="black" textAlign="left" italic>
              - Vivekananda, Jnana Yoga
            </Text>
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Fill>
            <Title c="#fff">
              Why did it take us so long to take advantage of nature?
            </Title>
            <Li>Homo Sapiens have been around for nearly 200,000 years</Li>
            <Li>Agriculture had only been developed about 12,000 years ago</Li>
            <Li>
              Did it really take us 188,000 years to figure out how to grow
              food? What stopped us from discovering agriculture earlier?
            </Li>
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Fit>
            <GraphTitle c="#e0e6ed">
              Göbekli Tepe (built ~12,000 years ago)
            </GraphTitle>

            <img src="https://i1.wp.com/earthmysterynews.com/wp-content/uploads/2016/09/Mysterious-Ruins-That-Predate-Known-Civilization.jpg?fit=676%2C450" />
          </Fit>
        </Slide>
        <Slide transition={['fade']} bgColor="smoke">
          <GraphTitle>Global Average Temperature </GraphTitle>
          <Text textColor="black" italic>
            {' '}
            420,000 years before present
          </Text>
          <GlobalAvgTemp />
        </Slide>
        <Slide transition={['fade']} bgColor="black">
          <Text textFont="Helvetica, Arial, sans-serif">
            <GraphTitle c="#e0e6ed">
              <Color c="#20ee94">Human greenhouse gas emissions</Color> are the
              cause
            </GraphTitle>
          </Text>
          <TempVariationGraph />
        </Slide>

        <Slide transition={['fade']} bgColor="darkRed" textColor="smoke">
          <GraphTitle c="#e0e6ed">Consequences</GraphTitle>
          <Fill>
            <Li>Rising temperatures</Li>
            <Li>Warming oceans</Li>
            <Li>Sinking ice sheets</Li>
            <Li>Glacial retreat</Li>
            <Li>Sea level rise</Li>
            <Li>Extreme weather</Li>
            <Li>Ocean Acidification</Li>
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="green" textColor="black">
          <GraphTitle>Solutions</GraphTitle>
          <Text
            textSize="1.5em"
            textFont="Georgia, Helvetica, Arial, sans-serif"
            textAlign="left"
            padding="10"
          >
            Paris Climate Agreement
          </Text>
          <Fill>
            <Text
              textSize="1em"
              textFont="Helvetica, Arial, sans-serif"
              textAlign="left"
            >
              <Li>first comprehensive climate mitigation agreement</Li>
              <Li>
                efforts to limit the temperature increase to 1.5 °C above
                pre-industrial levels
              </Li>
              <Li>
                France will no longer use coal to produce electricity after
                2022.
              </Li>
              <Li>India, France to only sell electric cars by 2030.</Li>
            </Text>
          </Fill>
        </Slide>
        <Slide transition={['fade']} bgColor="blue" textColor="smoke">
          <GraphTitle c="#e0e6ed">Counterarguments</GraphTitle>
          <Text
            textSize="1em"
            textFont="Helvetica, Arial, sans-serif"
            textAlign="left"
            textColor="#e0e6ed"
          >
            <Li>Earth goes into phases of warming and cooling naturally</Li>
            <Li>CO2 emissions do not cause global warming</Li>
            <Li>Population expansion & naturally produced CO2</Li>
            <Li>
              Global warming and cooling are primarily caused by fluctuations of
              the sun (solar forcing), not by human activity.
            </Li>
          </Text>
        </Slide>
      </Deck>
    )
  }
}
