import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Button from '../components/Button';
import { testNameToKey } from 'jest-snapshot/build/utils';

// afterEach(cleanup);

describe('test button', () => {
  test('render', () => {
    render(<Button />);
  });
});
