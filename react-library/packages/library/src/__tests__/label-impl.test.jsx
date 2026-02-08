import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import LabelImpl from '../label-impl.jsx';
import sinon from 'sinon';

describe(
    'LabelImpl',
    () => {
      let label;

      beforeEach(() => {
        label = {
          getWidth: sinon.stub(),
          getHeight: sinon.stub(),
        };
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
