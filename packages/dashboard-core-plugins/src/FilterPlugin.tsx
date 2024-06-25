import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import {
  assertIsDashboardPluginProps,
  DashboardPluginComponentProps,
  LayoutPanel,
  LayoutUtils,
  PanelEvent,
  updateDashboardData,
  useListener,
} from '@deephaven/dashboard';
import Log from '@deephaven/log';
import { TextUtils } from '@deephaven/utils';
import type { dh } from '@deephaven/jsapi-types';
import { InputFilterEvent } from './events';
import {
  DropdownFilterPanel,
  FilterSetManagerPanel,
  InputFilterPanel,
} from './panels';

const log = Log.module('FilterPlugin');

type Column = {
  name: string;
  type: string;
};

export type FilterChangeEvent = Column & {
  value: string;
  timestamp: number;
  excludePanelIds?: string[];
};

export type FilterPluginProps = Partial<DashboardPluginComponentProps>;

function flattenArray<T>(accumulator: T[], currentValue: T | T[]): T[] {
  return accumulator.concat(currentValue);
}

export function FilterPlugin(props: FilterPluginProps): JSX.Element | null {
  assertIsDashboardPluginProps(props);
  const { id: localDashboardId, layout, registerComponent } = props;
  const dispatch = useDispatch();
  const [panelColumns] = useState(() => new Map<LayoutPanel, Column[]>());
  const [panelFilters] = useState(
    () => new Map<LayoutPanel, FilterChangeEvent[]>()
  );
  const [panelTables] = useState(
    () => new Map<string | string[] | null | undefined, dh.Table>()
  );

  const sendUpdate = useCallback(() => {
    const columns = Array.from(panelColumns.values())
      .reduce(flattenArray, [] as Column[])
      .sort((a, b) => {
        const aName = TextUtils.toLower(a.name);
        const bName = TextUtils.toLower(b.name);
        if (aName !== bName) {
          return aName > bName ? 1 : -1;
        }

        const aType = TextUtils.toLower(a.type);
        const bType = TextUtils.toLower(b.type);
        if (aType !== bType) {
          return aType > bType ? 1 : -1;
        }

        return 0;
      })
      .reduce((array, column) => {
        if (
          array.length === 0 ||
          TextUtils.toLower(array[array.length - 1].name) !==
            TextUtils.toLower(column.name) ||
          TextUtils.toLower(array[array.length - 1].type) !==
            TextUtils.toLower(column.type)
        ) {
          array.push(column);
        }

        return array;
      }, [] as Column[]);

    const filters = Array.from(panelFilters.values())
      .reduce(flattenArray, [] as FilterChangeEvent[])
      .sort((a, b) => a.timestamp - b.timestamp);
    const tableMap = new Map(panelTables);

    log.debug('sendUpdate', { columns, filters, tableMap });
    dispatch(
      updateDashboardData(localDashboardId, { columns, filters, tableMap })
    );
  }, [dispatch, localDashboardId, panelColumns, panelFilters, panelTables]);

  /**
   * Handler for the COLUMNS_CHANGED event.
   * @param panel The component that's emitting the filter change
   * @param columns The columns in this panel
   */
  const handleColumnsChanged = useCallback(
    (panel: LayoutPanel, columns: Column | Column[]) => {
      log.debug2('handleColumnsChanged', panel, columns);
      panelColumns.set(panel, ([] as Column[]).concat(columns));
      sendUpdate();
    },
    [panelColumns, sendUpdate]
  );

  /**
   * Handler for the FILTERS_CHANGED event.
   * @param panel The component that's emitting the filter change
   * @param {FilterChangeEvent|Array<FilterChangeEvent>} filters The input filters set by the panel
   */
  const handleFiltersChanged = useCallback(
    (panel: LayoutPanel, filters: FilterChangeEvent | FilterChangeEvent[]) => {
      log.debug2('handleFiltersChanged', panel, filters);
      panelFilters.set(panel, [filters].flat());
      sendUpdate();
    },
    [panelFilters, sendUpdate]
  );

  const handleTableChanged = useCallback(
    (panel: LayoutPanel, table: dh.Table) => {
      log.debug2('handleTableChanged', panel, table);
      panelTables.set(LayoutUtils.getIdFromPanel(panel), table);
      sendUpdate();
    },
    [panelTables, sendUpdate]
  );

  const handlePanelUnmount = useCallback(
    (panel: LayoutPanel) => {
      log.debug2('handlePanelUnmount', panel);
      panelColumns.delete(panel);
      panelFilters.delete(panel);
      panelTables.delete(LayoutUtils.getIdFromPanel(panel));
      sendUpdate();
    },
    [panelColumns, panelFilters, panelTables, sendUpdate]
  );

  const handleOpenDropdown = useCallback(
    ({
      title = 'DropdownFilter',
      metadata = {},
      panelState = null,
      id = nanoid(),
      focusElement = LayoutUtils.DEFAULT_FOCUS_SELECTOR,
      createNewStack = false,
      dragEvent,
    }: {
      title?: string;
      metadata?: Record<string, unknown>;
      panelState?: Record<string, unknown> | null;
      id?: string;
      focusElement?: string;
      createNewStack?: boolean;
      dragEvent?: React.DragEvent;
    }) => {
      const config = {
        type: 'react-component' as const,
        component: DropdownFilterPanel.COMPONENT,
        props: { id, metadata, panelState, localDashboardId },
        title,
        id,
      };

      const { root } = layout;
      LayoutUtils.openComponent({
        root,
        config,
        focusElement,
        createNewStack,
        dragEvent,
      });
    },
    [layout, localDashboardId]
  );

  const handleOpenInput = useCallback(
    ({
      title = 'InputFilter',
      metadata = {},
      panelState = null,
      id = nanoid(),
      focusElement = LayoutUtils.DEFAULT_FOCUS_SELECTOR,
      createNewStack = false,
      dragEvent,
    }: {
      title?: string;
      metadata?: Record<string, unknown>;
      panelState?: Record<string, unknown> | null;
      id?: string;
      focusElement?: string;
      createNewStack?: boolean;
      dragEvent?: React.DragEvent;
    }) => {
      const config = {
        type: 'react-component' as const,
        component: InputFilterPanel.COMPONENT,
        props: { id, metadata, panelState, localDashboardId },
        title,
        id,
      };

      const { root } = layout;
      LayoutUtils.openComponent({
        root,
        config,
        focusElement,
        createNewStack,
        dragEvent,
      });
    },
    [layout, localDashboardId]
  );

  const handleOpenFilterSetManager = useCallback(
    ({
      title = 'FilterSets',
      metadata = {},
      panelState = null,
      id = nanoid(),
      focusElement = LayoutUtils.DEFAULT_FOCUS_SELECTOR,
      createNewStack = false,
      dragEvent,
    }: {
      title?: string;
      metadata?: Record<string, unknown>;
      panelState?: Record<string, unknown> | null;
      id?: string;
      focusElement?: string;
      createNewStack?: boolean;
      dragEvent?: React.DragEvent;
    }) => {
      const config = {
        type: 'react-component' as const,
        component: FilterSetManagerPanel.COMPONENT,
        props: { id, metadata, panelState, localDashboardId },
        title,
        id,
      };

      const { root } = layout;
      LayoutUtils.openComponent({
        root,
        config,
        focusElement,
        createNewStack,
        dragEvent,
      });
    },
    [layout, localDashboardId]
  );

  useEffect(
    function registerComponentsAndReturnCleanup() {
      const cleanups = [
        registerComponent(DropdownFilterPanel.COMPONENT, DropdownFilterPanel),
        registerComponent(InputFilterPanel.COMPONENT, InputFilterPanel),
        registerComponent(
          FilterSetManagerPanel.COMPONENT,
          FilterSetManagerPanel
        ),
      ];

      return () => {
        cleanups.forEach(cleanup => cleanup());
      };
    },
    [registerComponent]
  );

  useListener(
    layout.eventHub,
    InputFilterEvent.COLUMNS_CHANGED,
    handleColumnsChanged
  );
  useListener(
    layout.eventHub,
    InputFilterEvent.FILTERS_CHANGED,
    handleFiltersChanged
  );
  useListener(
    layout.eventHub,
    InputFilterEvent.TABLE_CHANGED,
    handleTableChanged
  );
  useListener(
    layout.eventHub,
    InputFilterEvent.OPEN_DROPDOWN,
    handleOpenDropdown
  );
  useListener(layout.eventHub, InputFilterEvent.OPEN_INPUT, handleOpenInput);
  useListener(
    layout.eventHub,
    InputFilterEvent.OPEN_FILTER_SET_MANAGER,
    handleOpenFilterSetManager
  );
  useListener(layout.eventHub, PanelEvent.UNMOUNT, handlePanelUnmount);

  return null;
}

export default FilterPlugin;
