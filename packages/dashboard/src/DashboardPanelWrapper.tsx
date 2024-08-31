import { PropsWithChildren } from 'react';

export function DashboardPanelWrapper({
  children,
}: PropsWithChildren): JSX.Element {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default DashboardPanelWrapper;
