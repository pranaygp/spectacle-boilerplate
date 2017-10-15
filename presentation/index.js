// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

import HelloWorld from "../assets/helloWorld.js";
import Counter from "../assets/counter.js";
import CounterAdvanced from "../assets/counterAdvanced.js";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  gmail: require('../assets/gmail.png'),
  webmonkeys: require("../assets/webmonkeys.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#5E696C",
  tertiary: "#F95962",
  quartenary: "#bfc7ca"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.webmonkeys} width={500} />
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Webmonkeys
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={1} bold>
            react
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="">
          <Heading>Problems?</Heading>
          <List>
            <Appear>
              <ListItem>
                Making pages dynamic with <b>user interaction</b> and dynamic data
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Web apps becoming more <b>data centric</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                The prevalence of <b>real time</b> pages
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="">
          <Heading>Solutions in the past</Heading>
          <List>
            <Appear>
              <ListItem>
                <b>Native JS</b> that manipulates the DOM
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Abstraction libraries like <b>jQuery</b>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                A string of JS "templating focussed" frameworks that culminated into <b>AngularJS</b> pages
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading textColor="primary">Enter React</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Templates</Heading>
          <List>
            <Appear>
              <ListItem>
                Construct webpages in <b>HTML and CSS</b>, and escape characters for dynamic data
                <br />
                <Code>{"<h1> {{post.title}} </h1>"}</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Focus on conventional technique of keeping HTML, CSS and JS completely independent of each other
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                JS only fills in the holes of an HTML frontend
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Components</Heading>
          <List>
            <Appear>
              <ListItem>
                Construct application logic and UI in <b>JSX</b> (and CSS) and render a “compiled” version to the DOM
                <br />
                <Code>{"ReactDOM.render(<h1>Hello</h1>, ...)"}</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Focus on keeping multiple standalone and reusable modules independent of each other. Don’t worry about separating languages.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                HTML lives inside JS and inherits the power of JS to manage the UI
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Controversial features</Heading>
          <List>
            <Appear>
              <ListItem>
                Combining JS and HTML
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Destroying the entire DOM and re-rendering on every cycle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Unidirectional data flow
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="quartenary" size={3} fit>A Demo</Heading>
          <Heading fit size={6} >
            <Link textColor="primary" href="http://codepen.io/gaearon/pen/ZpvBNJ">http://codepen.io/gaearon/pen/ZpvBNJ</Link>
          </Heading>
        </Slide>
        <Slide>
          <HelloWorld />
        </Slide>
        <Slide>
          <Counter />
        </Slide>
        <Slide>
          <CounterAdvanced />
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="quartenary" size={3} fit>Redux</Heading>
          <Appear>
            <Heading textColor="tertiary" size={6} caps fit>Better state management</Heading>
          </Appear>
          <Appear>
            <Heading fit size={6}>
              <Link textColor="primary" href="http://redux.js.org">http://redux.js.org</Link>
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
