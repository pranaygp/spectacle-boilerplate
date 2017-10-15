// Import React
import React from "react";

// Import Spectacle Core tags
import {
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
          <Layout>
            <Fill>
              <Heading>Problems?</Heading>
              <List>
                <ListItem>
                  Making pages dynamic with <b>user interaction</b> and dynamic data
                </ListItem>
                <ListItem>
                  Web apps becoming more <b>data centric</b>
                </ListItem>
                <ListItem>
                  The prevalence of <b>real time</b> pages
                </ListItem>
              </List>
            </Fill>
            {/* <Fill>
              <Image src={images.gmail} />
            </Fill> */}
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="">
          <Layout>
            <Fill>
              <Heading>Solutions in the past</Heading>
              <List>
                <ListItem>
                  <b>Native JS</b> that manipulates the DOM
                </ListItem>
                <ListItem>
                  Abstraction libraries like <b>jQuery</b>
                </ListItem>
                <ListItem>
                  A string of JS "templating focussed" frameworks that culminated into <b>AngularJS</b> pages
                </ListItem>
              </List>
            </Fill>
            {/* <Fill>
              <Image src={images.gmail} />
            </Fill> */}
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading textColor="primary">Enter React</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Templates</Heading>
          <List>
            <ListItem>
              Construct webpages in <b>HTML and CSS</b>, and escape characters for dynamic data
              <br />
              <Code>{"<h1> {{post.title}} </h1>"}</Code>
            </ListItem>
            <ListItem>
              Focus on conventional technique of keeping HTML, CSS and JS completely independent of each other
            </ListItem>
            <ListItem>
              JS only fills in the holes of an HTML frontend
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Components</Heading>
          <List>
            <ListItem>
              Construct application logic and UI in <b>JSX</b> (and CSS) and render a “compiled” version to the DOM
              <br />
              <Code>{"ReactDOM.render(<h1>Hello</h1>, ...)"}</Code>
            </ListItem>
            <ListItem>
              Focus on keeping multiple standalone and reusable modules independent of each other. Don’t worry about separating languages.
            </ListItem>
            <ListItem>
              HTML lives inside JS and inherits the power of JS to manage the UI
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} textColor="tertiary" caps>Controversial features</Heading>
          <List>
            <ListItem>
              Combining JS and HTML
            </ListItem>
            <ListItem>
              Destroying the entire DOM and re-rendering on every cycle
            </ListItem>
            <ListItem>
              Unidirectional data flow
            </ListItem>
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
      </Deck>
    );
  }
}
