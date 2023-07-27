function basicOp(operation, value1, value2)
{
  //setup a switch operator to determine what opperation to use
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      throw new Error("Invalid operator. Please use one of '+', '-', '*', or '/'.");
  }
}