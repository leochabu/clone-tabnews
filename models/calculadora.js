class Calculadora {
  somar(args) {
    if (!this.valid_type(args)) {
      return this.valid_type(args);
    }

    return args.reduce((a, b) => a + b, 0);
  }

  dividir(args) {
    if (!this.valid_type(args)) {
      return this.valid_type(args);
    }

    if (args.length > 2) {
      return "cannot use more than 2 values for division";
    }

    if (!args[1] || args[1] === 0) {
      return "cannot divide by zero";
    }

    return args[0] / args[1];
  }

  valid_type(args) {
    if (typeof args !== "object") {
      return "args type not allowed";
    }

    for (const element of args) {
      if (typeof element !== "number" || isNaN(element)) {
        return "invalid args";
      }
    }

    return true;
  }
}

calc = new Calculadora();

module.exports = Calculadora;
