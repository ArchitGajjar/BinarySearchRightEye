class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data){
    if(data < this.data && this.left){
      this.left.insert(data);
    } else if(data < this.data){
      this.left = new Node(data);
    } else if(data > this.data && this.right){
      this.right.insert(data);
    } else if( data > this.data){
      this.right = new Node(data);
    }
  }

  search(level){
    let counter = 0;
    let node = new Node();
    node = this;
    while(true){
      if(counter === level){
        return node.data;
      } else {
        if(node.right){
          node = node.right;
        } else {
          node = node.left;
        }
      }
      counter++;
    }
  }
}

const node = new Node(12);
node.insert(10);
// node.insert(14);
node.insert(8);
node.insert(11);
// node.insert(13);
// node.insert(15);
// node.insert(80);
// node.insert(70);
// node.insert(60);
// node.insert(55);
// node.insert(85);

// level
console.log('>>>>>>>>>', node.search(2));
module.exports = Node;
