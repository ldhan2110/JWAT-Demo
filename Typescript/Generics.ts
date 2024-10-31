function identity<Type>(arg: Type): Type {
  return arg;
}

identity<string>("Hello World");