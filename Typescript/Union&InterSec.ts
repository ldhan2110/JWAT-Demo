type StringOrNumber = string | number;   // type "StringOrNumber" will only be one of either "string" or "number"

type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;  // Now the type Person have the combined props of both Name & Age