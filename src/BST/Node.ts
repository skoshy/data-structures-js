export class Node<T> {
  public val: T;
  public left: Node<T> | undefined;
  public right: Node<T> | undefined;

  constructor(initialVal: any) {
    this.val = initialVal;
    this.left = undefined;
    this.right = undefined;
  }

  setSide = (side: "left" | "right", val: T) => {
    this[side] = new Node(val);
  };
}
