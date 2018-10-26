/**
 * @file Node class file for BST
 * @author Archit Gajjar <architgajjar1992@gmail.com>
 * @module BinarySearchTree
 *
 **/
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  
  /**
   * @param {any} data is decimal number inserting into BST 
   * @memberof Node is class
   */
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

  /**
   * @param {any} level searching index from right side.
   * @memberof Node is class
   */
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

module.exports = Node;
