# JavaScript Variables

 A variable is a named container that strores a piece of data so you can use or change it later in your code.
e.g A labeled jar, one can input something, remove it or replace it but the label will still remain.

# Declaring Variables
- `let` - for values that can change later
- `const`- for values that stay fixed once set
- `var`- the older way of declaring variables(mostly avoided in modern JS)

### Example
```Javascript
let age = 20;
const country = "Kenya";
var city = "Nairobi";
```
# Rules For Naming Variables
- The allowed characters are letters, numbers, _, and $.
- You can't start with numbers
- No spaces allowed
- You can't use JS reserved keywords (`let`, `function`, `return`) as names
- Names ARE case-sensitive (`age` and `Age`are different variables)
##### Examples of Valid names :
- `studentName`
- `_score`
- `total1`

##### Examples of Invalid names :
- `1name`
- `student name`
- `let`

# Naming Styles
- Camel Case: the first word is lowercase, every next word is capitalized; `firstName`, `studentAge`. It's the most common style in JavaScript.
- Pascal Case: Every word is capitalized; `FirstName`	`StudentAge`. For naming classes/constructors commonly in JS.
- Snake Case: words separated by underscores, lowercase; `first_name`,`student_age`. More common in Python.

### Summary
JS variables are containers that store data, which can be created using `let`,`const`, or `var` depending on whether the value needs to change. Variable names must follow specific rules such as, not starting with numbers, avoiding spaces and reserved keywords and being case-sensitive.
I've also learnt that naming styles like camelCase, PascalCase and snake_case are used differently  depending on what  you're naming and which language you're working in.


