# Advanced Syntax and ES6 Features

## classes and inheritence 
```js
class ParentClass {
  constructor(parentName) {
    this.parentname = parentName;
  }
  returnParent() {
    return this.parentname;
  }
}

class Child extends ParentClass {
  constructor(parantName, childName) {
    super(parantName);
    this.childName = childName;
  }
  returnChild() {
    return this.returnParent() + this.childName;
  }
}

let child = new Child("parent", "child");
console.log(child.returnChild());

```
