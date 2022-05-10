import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import styled from 'styled-components';
import { css } from '@emotion/css';

// putting all elements to the center
const Centered = styled.section`
  text-align: center;
`;

// two styles for different headings
const Heading = styled.section`
  color: blue;
  font-size: x-large;
  font-weight: bold;
  text-align: center;
`;

const SuperHeading = styled.section`
  color: black;
  font-size: xx-large;
  text-align: center;
  font-weight: bold;
`;

/// button to the center
const Button = styled.button`
  text-align: center;
  display: block;
  margin: auto;
`;

// Array experiment
const array = [1, 2, 3];
let i = 0;

export default function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [valueheight, setHeight] = useState(200);
  const [index, setIndex] = useState(0);

  const Box = css`
    background-color: ${color};
    width: 200px;
    padding-top: 50px;
    text-align: center;
    margin: auto;
    height: ${valueheight}px;
    transition-property: all;
    transition-duration: 1s;
    border: 3px solid #000;
  `;

  //answer that displays inside of the box
  const answer = `Generated Color: </background ${color}>`;

  return (
    <>
      <Centered>
        <SuperHeading> Random color generator</SuperHeading>
        <br />
        <Heading> Set Hue if you feel like it:</Heading>
        <br />
        <input
          value={hue}
          onChange={(event) => setHue(event.currentTarget.value)}
        />
        <br />
        <br />
        <Heading> Or luminosity: </Heading>
        <br />
        <input
          style={{
            display: 'block',
            margin: 'auto',
          }}
          value={luminosity}
          onChange={(event) => {
            setLuminosity(event.currentTarget.value);
            setColor(
              randomColor({
                luminosity: luminosity,
                hue: hue,
              }),
            );
          }}
        />
        <br />
        <Heading>Set the size of the box below: </Heading>
        <br />
        <input
          value={valueheight}
          onChange={(event) => setHeight(Number(event.currentTarget.value))}
        />
        <br />
        <br />
        <div className={Box}>{answer}</div>
        <br />
        <br />
        <button onClick={() => setIndex(index < 2 ? index + 1 : 0)}>
          Parsing array [1, 2, 3]
        </button>
        ....{array[index]}
      </Centered>
      <br />
      <Button
        autofocus="true"
        onClick={() =>
          setColor(
            randomColor({
              luminosity: luminosity,
              hue: hue,
            }),
          )
        }
      >
        Generate random color
      </Button>
    </>
  );
}