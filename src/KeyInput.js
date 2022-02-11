class KeyInput {
  constructor() {
    this.keys = {};
    window.addEventListener("keydown", this.down.bind(this));
    window.addEventListener("keyup", this.up.bind(this));
    window.addEventListener("keyrigth", this.right.bind(this));
    window.addEventListener("keyleft", this.left.bind(this));
  }
  isPressed(keyCode){
    return this.keys[keyCode] ? this.keys[keyCode] : false;
  }
  down(e){
    if(this.keys[e.keyCode]) return;
    this.keys[e.keyCode] = true;
    console.log("keyDown", e.key, e.keyCode)
  }
  up(e){
    this.keys[e.keyCode] = false;
    console.log("keyDown", e.key, e.keyCode)
  }
  left(e){
    this.keys[e.keyCode] = false;
    console.log("keyDown", e.key, e.keyCode)
  }
  right(e){
    this.keys[e.keyCode] = false;
    console.log("keyDown", e.key, e.keyCode)
  }
}

const keyInput = new KeyInput();

export default keyInput;
