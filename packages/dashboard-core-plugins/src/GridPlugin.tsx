import React, { ComponentType, DragEvent, useCallback, useEffect } from 'react';
import {
  DashboardPluginComponentProps,
  DashboardUtils,
  LayoutUtils,
  PanelHydrateFunction,
  useListener,
} from '@deephaven/dashboard';
import { IrisGridModel } from '@deephaven/iris-grid';
import shortid from 'shortid';
import { IrisGridPanel } from './panels';
import { IrisGridEvent } from './events';

export type GridPluginComponentProps = DashboardPluginComponentProps & {
  getDownloadWorker?: () => Promise<ServiceWorker>;
  loadPlugin?: (name: string) => ReturnType<typeof React.forwardRef>;
  hydrate: PanelHydrateFunction;
};

export const GridPlugin = ({
  getDownloadWorker,
  loadPlugin,
  id,
  layout,
  registerComponent,
  hydrate = DashboardUtils.hydrate,
}: GridPluginComponentProps): JSX.Element => {
  const handleOpen = useCallback(
    (
      title: string,
      makeModel: () => IrisGridModel,
      metadata: Record<string, unknown> = {},
      panelId = shortid.generate(),
      dragEvent?: DragEvent
    ) => {
      const config = {
        type: 'react-component',
        component: IrisGridPanel.COMPONENT,
        props: {
          getDownloadWorker,
          loadPlugin,
          localDashboardId: id,
          id: panelId,
          metadata,
          makeModel,
        },
        title,
        id: panelId,
      };

      const { root } = layout;
      LayoutUtils.openComponent({ root, config, dragEvent });
    },
    [getDownloadWorker, id, layout, loadPlugin]
  );

  const handleClose = useCallback(
    (panelId: string) => {
      const config = { component: IrisGridPanel.COMPONENT, id: panelId };
      const { root } = layout;
      LayoutUtils.closeComponent(root, config);
    },
    [layout]
  );

  useEffect(() => {
    const cleanups = [
      registerComponent(
        IrisGridPanel.COMPONENT,
        (IrisGridPanel as unknown) as ComponentType,
        hydrate
      ),
    ];
    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, [hydrate, registerComponent]);

  useListener(layout.eventHub, IrisGridEvent.OPEN_GRID, handleOpen);
  useListener(layout.eventHub, IrisGridEvent.CLOSE_GRID, handleClose);

  return <></>;
};

export default GridPlugin;
