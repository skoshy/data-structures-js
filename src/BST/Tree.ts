import { Node, NodeTypes } from './Node';

export class Tree<T> {
  public root: Node<T>;

  constructor(initialRootVal: T) {
    this.root = new Node(initialRootVal);
  }

  setRootNode = (rootVal: T) => (this.root = new Node(rootVal));

  add = (newVal: T) => {
    if (this.root === undefined) return this.setRootNode(newVal);

    let node = this.root;
    while (true) {
      let nodeSide: NodeTypes['Side'] = newVal >= node.val ? 'right' : 'left';

      if (node[nodeSide] === undefined) {
        node.setSide(nodeSide, newVal);
        break;
      }
    }
  };
}
