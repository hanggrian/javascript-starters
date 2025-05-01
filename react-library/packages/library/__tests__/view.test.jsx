import {beforeEach, describe, expect, it} from 'vitest';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import View from '../src/view';

describe(
  'View',
  () => {
    let view;

    beforeEach(() => {
      const app = render(<View/>);
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
