(class {
  static get info() {
    return {
      name: "MyMod"
    };
  }
  
  constructor(Scratch) {
    this.Scratch = Scratch;
  }
  
  init() {
    this.Scratch.AddBlock();
  }
})
