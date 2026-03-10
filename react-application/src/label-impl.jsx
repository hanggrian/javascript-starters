class LabelImpl {
  constructor(label) {
    this.label = label;
  }

  getSize() {
    return this.label.getWidth() * this.label.getHeight();
  }
}

export default LabelImpl;
