import { PropsWithChildren } from 'react';
import type { PanelProps } from './DashboardPlugin';

export function DashboardPanelWrapper({
  children,
}: PropsWithChildren<PanelProps>): JSX.Element {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default DashboardPanelWrapper;
