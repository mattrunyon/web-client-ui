import type { dh } from '@deephaven/jsapi-types';
import { TestUtils } from '@deephaven/utils';
import { renderHook, waitFor } from '@testing-library/react';
import useSelectDistinctTable from './useSelectDistinctTable';

let table: dh.Table;
let derivedTable: dh.Table;

beforeEach(() => {
  jest.clearAllMocks();

  table = TestUtils.createMockProxy<dh.Table>();
  derivedTable = TestUtils.createMockProxy<dh.Table>();

  TestUtils.asMock(table.selectDistinct).mockResolvedValue(derivedTable);
});

it('should create and subscribe to a `selectDistinct` derivation of a given table', async () => {
  const { result } = renderHook(() => useSelectDistinctTable(table));

  expect(result.current.distinctTable).toBeNull();

  await waitFor(() => expect(result.current.distinctTable).toBe(derivedTable));
});

it('should safely ignore null table', async () => {
  const { result } = renderHook(() => useSelectDistinctTable(null));

  expect(result.current.distinctTable).toBeNull();

  await waitFor(() => expect(result.current.distinctTable).toBeNull());
});

it('should unsubscribe on unmount', async () => {
  const { result, unmount } = renderHook(() => useSelectDistinctTable(table));

  expect(derivedTable.close).not.toHaveBeenCalled();

  await waitFor(() => expect(result.current.distinctTable).toBe(derivedTable));

  unmount();

  await waitFor(() => expect(derivedTable.close).toHaveBeenCalled());
});
