import { useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  const textures = {
    dirt,
    grass,
    glass,
    wood,
    log,
  };

  useEffect(() => {
    const pressedTexture = Object.entries(textures).find(
      ([key, value]) => value
    );
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeOut = setTimeout(() => {
      setVisible(false);
    }, 2000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeOut);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute centered texture-select">
        {Object.entries(images).map(([key, src]) => {
          return (
            <img
              key={key}
              src={src}
              alt={key}
              className={`${key === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    )
  );
};
