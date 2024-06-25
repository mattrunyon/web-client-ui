import React, { useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  Button,
  Checkbox,
  FadeTransition,
  ItemList,
  ThemeExport,
} from '@deephaven/components';
import { dhSortAlphaDown, dhSortAlphaUp } from '@deephaven/icons';
import { TableUtils } from '@deephaven/jsapi-utils';
import { Aggregation } from './Aggregations';
import { filterValidColumns } from './AggregationUtils';
import './AggregationEdit.scss';
import { DisplayColumn } from '../../IrisGridModel';

interface AggregationEditItem {
  value: string;
  displayValue: string;
}

export type AggregationEditProps = {
  aggregation: Aggregation;
  columns: readonly DisplayColumn[];
  onChange: (aggregation: Aggregation) => void;
};

enum SortType {
  NONE,
  ASCENDING,
  DESCENDING,
}

const DEFAULT_ROW_HEIGHT = 30;

function AggregationEdit({
  aggregation,
  columns,
  onChange,
}: AggregationEditProps): JSX.Element {
  const [top, setTop] = useState(-1);
  const [bottom, setBottom] = useState(-1);
  const [sort, setSort] = useState(SortType.NONE);
  const { invert, selected } = aggregation;
  const list = useRef<ItemList<AggregationEditItem>>(null);

  const isSelected = useCallback(
    (name: string) => (selected.includes(name) ? !invert : invert),
    [invert, selected]
  );

  const validColumns = useMemo(() => {
    let filteredColumns = filterValidColumns(columns, aggregation.operation);
    if (sort !== SortType.NONE) {
      filteredColumns = TableUtils.sortColumns(
        filteredColumns,
        sort === SortType.ASCENDING
      );
    }
    return filteredColumns;
  }, [columns, aggregation.operation, sort]);

  const items = useMemo(
    () =>
      top >= 0
        ? validColumns.slice(top, bottom + 1).map(c => ({
            value: c.name,
            displayValue: c.name,
            isSelected: isSelected(c.name),
          }))
        : [],
    [validColumns, isSelected, bottom, top]
  );

  const handleSelect = useCallback(
    (itemIndex: number) => {
      const { name } = validColumns[itemIndex];
      const selectedIndex = selected.indexOf(name);
      let newSelected = [...selected];
      let newInvert = invert;
      if (selectedIndex >= 0) {
        newSelected.splice(selectedIndex, 1);
      } else {
        newSelected.push(name);
        if (newSelected.length === validColumns.length) {
          // Every item is either selected or deselected, flip the inversion bit
          newSelected = [];
          newInvert = !invert;
        }
      }

      onChange({ ...aggregation, selected: newSelected, invert: newInvert });
    },
    [aggregation, invert, validColumns, selected, onChange]
  );

  const handleReset = useCallback(() => {
    setSort(SortType.NONE);
    onChange({ ...aggregation, selected: [], invert: true });
  }, [aggregation, onChange]);

  const handleViewportChange = useCallback(
    (newTop: number, newBottom: number) => {
      setTop(newTop);
      setBottom(newBottom);
    },
    [setTop, setBottom]
  );

  const toggleAll = useCallback(() => {
    if (selected.length === 0) {
      onChange({ ...aggregation, invert: !invert });
    } else {
      onChange({ ...aggregation, selected: [], invert: true });
    }
  }, [aggregation, invert, onChange, selected]);

  const checked = selected.length === 0 ? invert : null;
  const isModified = selected.length !== 0 || !invert || sort !== SortType.NONE;

  return (
    <div role="menu" className="aggregation-edit">
      <div className="top-menu">
        <div className="form-inline">
          <Checkbox checked={checked} onChange={toggleAll}>
            Toggle All
          </Checkbox>
          <div className="spacer" />
          <FadeTransition
            in={isModified}
            timeout={ThemeExport.transitionSlowMs}
            mountOnEnter
            unmountOnExit
          >
            <Button kind="ghost" className="btn-reset" onClick={handleReset}>
              Reset
            </Button>
          </FadeTransition>
          <Button
            kind="ghost"
            className={classNames({
              active: sort === SortType.ASCENDING,
            })}
            icon={dhSortAlphaDown}
            tooltip="Sort ascending"
            onClick={() => setSort(SortType.ASCENDING)}
          />
          <Button
            kind="ghost"
            className={classNames({
              active: sort === SortType.DESCENDING,
            })}
            icon={dhSortAlphaUp}
            tooltip="Sort descending"
            onClick={() => setSort(SortType.DESCENDING)}
          />
        </div>
      </div>
      <div className="aggregation-edit-item-list">
        <ItemList
          itemCount={validColumns.length}
          items={items}
          offset={top}
          renderItem={({ item }) => (
            <Checkbox checked={isSelected(item.value)}>
              {item.displayValue}
            </Checkbox>
          )}
          onSelect={handleSelect}
          onViewportChange={handleViewportChange}
          rowHeight={DEFAULT_ROW_HEIGHT}
          focusSelector="input"
          ref={list}
        />
      </div>
    </div>
  );
}

export default AggregationEdit;
