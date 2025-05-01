import {beforeEach, describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import AnotherView from '../src/another-view';

describe(
    'Another View',
    () => {
      let view;

      beforeEach(() => {
        const app = render(<AnotherView/>);
        view = app.getByTestId('view-id');
      });

      it(
          'view have class',
          () => {
            expect(view).toHaveClass('view-class');
          },
      );
    },
);
