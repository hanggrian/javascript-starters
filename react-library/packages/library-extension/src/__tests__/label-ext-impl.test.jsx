import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import LabelExtImpl from '../label-ext-impl.jsx';
import sinon from 'sinon';

describe(
    'LabelExtImpl',
    () => {
      let label;

      beforeEach(() => {
        label = {
          getX: sinon.stub(),
          getY: sinon.stub(),
        };
      });

      it(
          'test',
          () => {
            label.getX.returns(0);
            label.getY.returns(1);
            expect(new LabelExtImpl(label).getPosition()).toBe('(0,1)');
            sinon.assert.calledOnce(label.getX);
            sinon.assert.calledOnce(label.getY);
          },
      );

      afterEach(() => sinon.restore());
    },
);
