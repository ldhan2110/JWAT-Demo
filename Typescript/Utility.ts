// Partial: turn every props into optional
type Product = {
    productId: string;
    productName: string;
}
type OptionalProduct = Partial<Product>


//Required: Contradict with Partial
interface Props {
  a?: number;
  b?: string;
}
type MandatoryProps = Required<Props>



// Awaited: remove the Promise outer from the type
async function doSomething(): Promise<Response>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
}
type Result = Awaited<ReturnType<typeof doSomething>>



//Readonly: Turn the props of the type to readonly
interface Todo {
  title: string;
  //readonly title: string;  // You can use this as well
}
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
//todo.title = "Hello";



//Record: Constructs an object type whose property keys are Keys and whose property values are Type
interface CatInfo {
  age: number;
  breed: string;
}
const cats: Record<keyof CatInfo, CatInfo> = {
  age: { age: 10, breed: "Persian" },
  breed: { age: 5, breed: "Maine Coon" },
};


// Omit: Constructs a type by picking all properties from Type and then removing Keys 
interface TodoPreview {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
type TodoOmitPreview = Omit<TodoPreview, "description" | "createdAt">;


//Pick: Constructs a type by picking the set of properties Keys
interface TodoPreview2 {
  title: string;
  description: string;
  completed: boolean;
}
type TodoSomePreview = Pick<TodoPreview2, "title" | "completed">;