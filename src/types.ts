export type Definition = {
  definition: string;
  example?: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
};

export type License = {
  name: string;
  url: string;
};

export type Phonetic = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
};

export type DictionaryResult = {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  meanings: Meaning[];
};

export type Font = "sans" | "serif" | "mono";
