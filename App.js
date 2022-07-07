import React, { useState, useCallback } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
const Youtube = () => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };
  return (
    <View>
      <YoutubePlayer height={300} play={playing} videoId={"9zEl-FQLI4A"} />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
};
export default Youtube;
