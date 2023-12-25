const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = { data, left: null, right: null };
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data, node = this.rootNode) {
    if (!node) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data, node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.remove(data, node.left);
      return node;
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
      return node;
    }

    if (!node.left && !node.right) {
      return null;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    let minValueNode = node.right;

    while (minValueNode.left) {
      minValueNode = minValueNode.left;
    }

    node.data = minValueNode.data;
    node.right = this.remove(minValueNode.data, node.right);

    return node;
  }

  min(node = this.rootNode) {
    if (!node) {
      return null;
    }

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max(node = this.rootNode) {
    if (!node) {
      return null;
    }

    while (node.right) {
      node = node.right;
    }
    
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};