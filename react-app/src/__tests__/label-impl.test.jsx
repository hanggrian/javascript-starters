import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import LabelImpl from '../label-impl.jsx';
import sinon from 'sinon';

describe(
    'LabelImpl',
    () => {
      let label;
      let app;

      beforeEach(() => {
        label = {
          getWidth: sinon.stub(),
          getHeight: sinon.stub(),
        };
        app = render(<div></div>);
      });

      it(
          'test',
          () => {
            label.getWidth.returns(2);
            label.getHeight.returns(4);
            expect(new LabelImpl(label).getSize()).toBe(8);
            sinon.assert.calledOnce(label.getWidth);
            sinon.assert.calledOnce(label.getHeight);
          },
      );

      afterEach(() => sinon.restore());
    },
);
