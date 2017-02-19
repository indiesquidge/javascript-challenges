# Stack Machine Calculator

A [Stack Machine](https://en.wikipedia.org/wiki/Stack_machine) is a type of computer that processes instructions by pushing and
popping values to an internal "stack." A Stack Machine is both a conceptual
model for how certain computations can be performed, and a concrete type of
program that can be implemented in either hardware or software.

A good example of a simple stack machine is a stack-based calculator -- it
supports doing basic math operations using this stack-based computational model.
Try building one out in this exercise.

### Instruction Format

Our stack machine will take in a series of instructions as a string and process
them as individual words. So a sample program might look like "5 5 +". This
program contains 3 instructions -- push a number, then push a number, then add
the top 2 values from the stack.

### Instruction Set

The operations our stack machine supports will include: "ADD", "SUB"(tract),
"POP", "DUP"(licate), and "INT"(push). The operations are defined as follows:

  * "ADD": Pop the last 2 values from the stack, add them, and push the resulting sum to the stack
  * "SUB": Pop the last 2 values from the stack, subtract the second (lower) one from the first (top-most) one, and push thge resulting difference to the stack
  * "POP": Remove a value from the stack and throw it away
  * "DUP": Duplicate the top value on the stack
  * "INT": This is the default instruction, which gets performed whenever a plain number appears in the instruction set. To handle a number, simply push it to the stack.

### Getting the Result

The "result" of processing a series of stack instructions should be whatever top
value is left on the stack after all the instructions have been run.

### Examples

##### Push a number

`process("13")` -- The only instruction here is a number, which means we should
push that number to the stack. This is the last instruction so the stack ends
with `13` as its top value, which will be the result.

##### Add 2 numbers

`process("5 5 +")` -- Push 5, then Push 5, then add the last 2 and push that
result. The stack ends with `10` on top, which is the answer.

##### Subtract 2 numbers

`process("5 10 -")` -- Push 5, then Push 10, then subtract the last 2 and push
the result. Remember we subtract the lower stack value from the upper, so `10 - 5` in this case. The result will be 5

##### More Complex Example

`process("13 DUP 4 POP 5 DUP + DUP + -")` -- Results in 7

_stack trace:_

**start**: `process("13")`
**next**: `process("13 DUP")` => `process("13 13")`
**next**: `process("13 13 4 POP")` => `process("13 13")`
**next**: `process("13 13 5 DUP")` => `process("13 13 5 5")`
**next**: `process("13 13 5 5 +")` => `process("13 13 10")`
**next**: `process("13 13 10 DUP")` => `process("13 13 10 10")`
**next**: `process("13 13 10 10 +")` => `process("13 13 20")`
**end**: `process("13 13 20 -")` => `process("13 7")`
**result**: `7`

### Getting Started

The file you will be editing is `stack-machine-calculator.js`.

The `stack-machine-calculator-test.js` file includes a test suite to run your
code against.

First run `npm i` to install the dependencies, then run `npm test` to run the
test suite in full.
