import { Component, Fragment } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import {
  Cubes,
  FPV,
  Ground,
  Menu,
  Player,
  TextureSelector,
} from "./components";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Canvas>
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5} />
          <FPV />
          <Physics>
            <Player />
            <Cubes />
            <Ground />
          </Physics>
        </Canvas>
        <div className="absolute centered cursor">+</div>
        <TextureSelector />
        <Menu />
      </Fragment>
    );
  }
}
