import { SearchBlockDataAdapter } from './dataAdapter';

describe('eventCalendar dataAdapter', () => {
  it('calls onChangeBlock with the data merged with the changed field', () => {
    const onChangeBlock = vi.fn();
    SearchBlockDataAdapter({
      block: 'block-1',
      data: { headline: 'Old', showTotalResults: true },
      id: 'headline',
      onChangeBlock,
      value: 'New',
    });
    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      headline: 'New',
      showTotalResults: true,
    });
  });
});
