import formatNumber from '../formatNumber';

test.each([
  [formatNumber('   +7 (927) 000-00-00    '), '+79270000000'],
  [formatNumber('   7 (927) 000-00-00'), '+79270000000'],
  [formatNumber('   8 (927) 000-00-00'), '+79270000000'],
  [formatNumber('   00 3464 000-00-00'), '+34640000000'],
  [formatNumber('   +86 000 000 0000'), '+860000000000'],
  [formatNumber('   927 000-00-00'), '+79270000000'],
])(
  'should get true phone number',
  (Data, expected) => {
    const received = formatNumber(Data);

    expect(received).toBe(expected);
  },
);
