// @flow

import 'react-native';
import testExport from '../testExport'

it('works with a', () => {
  expect(testExport.a).toBe('a');
});

it('works with b', () => {
    expect(testExport.b).toBe('b');
  });

