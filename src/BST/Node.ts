export type NodeTypes<T> = {
  Side: 'left' | 'right';
  LeftOrRight: Node<T> | undefined;
};

export class Node<T> {
  public val: T;
  public left: NodeTypes<T>['LeftOrRight'];
  public right: NodeTypes<T>['LeftOrRight'];

  constructor(initialVal: any) {
    this.val = initialVal;
    this.left = undefined;
    this.right = undefined;
  }

  setSide = (side: NodeTypes<T>['Side'], val: T) => {
    this[side] = new Node(val);
  };
}
