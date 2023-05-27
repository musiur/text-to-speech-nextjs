import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const TextToSpeech = () => {
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className="max-w-[500px] mx-auto py-20 grid grid-cols-1 gap-5">
      <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center">Text To Speech Converter Using React Js</h2>
      <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-5 rounded-xl w-full min-h-[300px]"
        ></textarea>
      <button onClick={() => speak({ text: value })} className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Speech</button>
    </div>
  );
};
export default TextToSpeech;
