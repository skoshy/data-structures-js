import { Node, NodeTypes } from './Node';

export class Tree<T> {
  public root: Node<T>;

  constructor(initialRootVal: T) {
    this.root = new Node(initialRootVal);
  }

  setRootNode = (rootVal: T) => (this.root = new Node(rootVal));

  add = (newVal: T): void => {
    if (this.root === undefined) return this.setRootNode(newVal) && undefined;

    let node: NodeTypes<T>['LeftOrRight'] = this.root;
    while (node) {
      let nodeSide: NodeTypes<T>['Side'] =
        newVal >= node.val ? 'right' : 'left';

      if (node[nodeSide] === undefined) {
        node.setSide(nodeSide, newVal);
        break;
      }

      node = node[nodeSide];
    }
  };

  // exists = (val: T): boolean => {
  //   if (this.root === undefined) return false;

  //   let node = this.root;
  //   while (true) {
  //     if (node.val === val) return true;

  //     let nodeSide: NodeTypes['Side'] = val >= node.val ? 'right' : 'left';
  //     if (node[nodeSide] === undefined) {
  //       node.setSide(nodeSide, newVal);
  //       break;
  //     }
  //   }

  //   return false;
  // };
}
