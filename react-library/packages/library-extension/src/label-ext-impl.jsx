import LabelImpl from '@library/library/label-impl';

class LabelExtImpl extends LabelImpl {
  constructor(label) {
    super(label);
  }

  getPosition() {
    return `(${this.label.getX()},${this.label.getY()})`;
  }
}

export default LabelExtImpl;
