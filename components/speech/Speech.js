import * as Speech from "expo-speech";

export const Speak = async (message) => {
  Speech.speak(message, {
    voice: "fr-FR-language",
    language: "fr-FR",
  });
};

//for get all voices available
// try {
//   let voicesList = Speech.getAvailableVoicesAsync();
//   voicesList.then((value) => {
//     console.log(
//       value.filter((x) => {
//         return x.language.includes("fr-FR");
//       })
//     );
//   });
// } catch (error) {
//   console.log(error);
// }
