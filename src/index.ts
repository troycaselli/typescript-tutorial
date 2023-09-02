// TYPE ALIASES
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "James",
  retire: (date: Date) => {
    console.log(date);
  },
};
console.log(employee);

// UNION TYPES
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// INTERSECTION TYPES
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// alias is more than one type
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// LITERAL TYPES
// variable value is limited to specific values
type Quantity = 50 | 100 | "50" | "100";
let quantity: Quantity = 50;

// NULLABLE TYPES
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola, friend!");
}

greet(null);

// OPTIONAL CHAINING
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

// if (customer !== null && customer !== undefined)
// console.log(customer.birthday);

// OPTIONAL PROPERTY ACCESS OPERATOR :::: Alternative to above two lines:
console.log(customer?.birthday?.getFullYear());

// OPTIONAL ELEMENT ACCESS OPERATOR
// customers?.[0]

// OPTIONAL CALL OPERATOR FOR FUNCTIONS
let log: any = null;
// question mark prevents crash because log is not = to a function.
log?.("a");
