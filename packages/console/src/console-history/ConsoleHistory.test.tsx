import React from 'react';
import { createRoot } from 'react-dom/client';
import ConsoleHistory from './ConsoleHistory';

function makeHistoryItem(
  message,
  result,
  cancelResult = () => undefined,
  disabledObjects = []
) {
  return {
    message,
    result,
    cancelResult,
    disabledObjects,
  };
}

function makeHistoryItems(count) {
  const historyItems = [];
  const result = {
    changes: {
      created: [],
      removed: [],
      updated: [],
    },
  };
  for (let i = 0; i < count; i += 1) {
    const historyItem = makeHistoryItem(`Test Item ${i}`, result);
    historyItems.push(historyItem);
  }

  return historyItems;
}

it('renders an empty list without crashing', () => {
  const root = createRoot(document.createElement('div'));
  const items = makeHistoryItems(0);
  root.render(
    <ConsoleHistory items={items} language="python" openObject={jest.fn()} />
  );
});

it('renders a list of 100 without crashing', () => {
  const root = createRoot(document.createElement('div'));
  const items = makeHistoryItems(100);
  root.render(
    <ConsoleHistory items={items} language="python" openObject={jest.fn()} />
  );
});
