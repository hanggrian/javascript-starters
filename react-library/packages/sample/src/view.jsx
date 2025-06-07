import LabelExtImpl from '@library/library-extension/src/label-ext-impl';

/**
 * @returns {JSX.Element}
 */
function View() {
  const impl =
      new LabelExtImpl({
        getX: () => 50,
        getY: () => 50,
        getWidth: () => 300,
        getHeight: () => 100,
      });
  return (
      <label>{`${impl.getSize()} pixels at ${impl.getPosition()}`}</label>
  );
}

export default View;
