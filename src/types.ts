export type Definition = {
  definition: string;
  example?: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
};

export type DictionaryResult = {
  word: string;
  phonetic?: string;
  meanings: Meaning[];
};
