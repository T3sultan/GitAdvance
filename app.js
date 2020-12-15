function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  function getIntoAnArgument(...args) {
    args.forEach(arg => console.log(arg));
}