import {afterEach, beforeEach, describe, expect, it} from 'vitest';
import {render} from '@testing-library/react';
import LabelImpl from '../label-impl.jsx';
import {assert, restore, stub} from 'sinon';

describe(
    'LabelImpl',
    () => {
      let label;
      let app;

      beforeEach(() => {
        label = {
          getWidth: stub(),
          getHeight: stub(),
        };
        app = render(<div></div>);
      });

      it(
          'test',
          () => {
            label.getWidth.returns(2);
            label.getHeight.returns(4);
            expect(new LabelImpl(label).getSize()).toBe(8);
            assert.calledOnce(label.getWidth);
            assert.calledOnce(label.getHeight);
          },
      );

      afterEach(() => restore());
    },
);
