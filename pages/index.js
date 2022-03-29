import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";
import sendFile from "../components/sendFile.js";
const fileTypes = ["PDF", "TXT"];
export default function Home() {
  const [file1, setFile1] = useState(0);
  const [file2, setFile2] = useState(0);
  const [sliderValue, setSliderValue] = useState(false);

  const handleChange1 = (file1) => {
    setFile1(file1);
  };

  const handleChange2 = (file2) => {
    setFile2(file2);
  };
  if (file1 && file2) {
    const result = sendFile(file1, file2);
    console.log("HI", result);
    if (typeof result === typeof 1) {
      console.log("Hello");
      console.log("Result ", result * 100);
      setSliderValue(result * 100);
    }
  }
  return (
    <>
      <FileUploader
        handleChange={handleChange1}
        name="file1"
        types={fileTypes}
      />
      <FileUploader
        handleChange={handleChange2}
        name="file2"
        types={fileTypes}
      />
      {sliderValue && (
        <Slider
          id="slider"
          defaultValue={sliderValue}
          min={0}
          max={100}
          colorScheme="teal"
        >
          <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
            25%
          </SliderMark>
          <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
            50%
          </SliderMark>
          <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
            75%
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="teal.500"
            color="white"
            placement="top"
            isOpen={true}
            label={`${sliderValue}%`}
          >
            <SliderThumb />
          </Tooltip>
        </Slider>
      )}
    </>
  );
}
