class MyString {
  constructor(name) {
    this.name = name;
  }
  reverse(name) {
    return name.split('').reverse().join('')
  }
  ucFirst(name) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
  ucWords(name) {
    return name.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')

  }
}

let str = new MyString();

console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));