import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import LabelExtImpl from '../label-ext-impl.jsx';
import {assert, restore, stub} from 'sinon';

describe(
    'LabelExtImpl',
    () => {
      let label;

      beforeEach(() => {
        label = {
          getX: stub(),
          getY: stub(),
        };
      });

      it(
          'test',
          () => {
            label.getX.returns(0);
            label.getY.returns(1);
            expect(new LabelExtImpl(label).getPosition()).toBe('(0,1)');
            assert.calledOnce(label.getX);
            assert.calledOnce(label.getY);
          },
      );

      afterEach(() => restore());
    },
);
