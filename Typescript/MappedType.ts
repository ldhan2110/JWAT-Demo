type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean; // This will loop through props of Type and re-assign the type of properties
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
type FeatureOptions = OptionsFlags<Features>;