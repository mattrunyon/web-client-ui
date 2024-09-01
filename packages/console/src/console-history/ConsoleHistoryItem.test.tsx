import React from 'react';
import { createRoot } from 'react-dom/client';
import ConsoleHistoryItem from './ConsoleHistoryItem';

const DEFAULT_ITEM = {
  message: 'Test item',
  cancelResult: () => undefined,
  disabledObjects: [],
};

it('renders default item without crashing', () => {
  const root = createRoot(document.createElement('div'));
  root.render(
    <ConsoleHistoryItem
      item={DEFAULT_ITEM}
      language="python"
      openObject={jest.fn()}
    />
  );
});
