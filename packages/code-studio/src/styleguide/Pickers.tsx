import React, { cloneElement, useCallback, useState } from 'react';
import {
  Checkbox,
  ComboBox,
  ComboBoxNormalized,
  Flex,
  Icon,
  Item,
  ItemKey,
  PICKER_ITEM_HEIGHTS,
  PICKER_TOP_OFFSET,
  Picker,
  PickerNormalized,
  Section,
  Text,
} from '@deephaven/components';
import { vsPerson } from '@deephaven/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPositionOfSelectedItem } from '@deephaven/react-hooks';
import { generateItemElements, generateNormalizedItems } from './utils';
import SampleSection from './SampleSection';

// Generate enough items to require scrolling
const items = [...generateNormalizedItems(52)];
const itemsWithIcons = [...generateNormalizedItems(52, { icons: true })];
const itemElementsA = [...generateItemElements(0, 51)];
const itemElementsB = [...generateItemElements(52, 103)];
const itemElementsC = [...generateItemElements(104, 155)];
const itemElementsD = [...generateItemElements(156, 207)];
const itemElementsE = [...generateItemElements(208, 259)];

const mixedItemsWithIconsNoDescriptions = [
  'String 1',
  'String 2',
  'String 3',
  '',
  'Some really long text that should get truncated',
  444,
  999,
  true,
  false,
  ...itemElementsA.map((itemEl, i) =>
    i % 5 > 0
      ? itemEl
      : cloneElement(itemEl, {
          ...itemEl.props,
          children: [
            <PersonIcon key={`icon-${itemEl.props.children}`} />,
            <Text key={`label-${itemEl.props.children}`}>
              {itemEl.props.children}
            </Text>,
          ],
        })
  ),
];

function PersonIcon(): JSX.Element {
  return (
    <Icon>
      <FontAwesomeIcon icon={vsPerson} />
    </Icon>
  );
}

export function Pickers(): JSX.Element {
  const [selectedKey, setSelectedKey] = useState<ItemKey | null>(200);

  const [showIcons, setShowIcons] = useState(true);

  const [filteredItems, setFilteredItems] = useState(itemsWithIcons);

  const onSearch = useCallback(
    (searchText: string) =>
      setFilteredItems(
        searchText === ''
          ? itemsWithIcons
          : itemsWithIcons.filter(
              ({ item }) => item?.textValue?.includes(searchText)
            )
      ),
    []
  );

  const getInitialScrollPosition = useCallback(
    async () =>
      getPositionOfSelectedItem({
        keyedItems: items,
        itemHeight: PICKER_ITEM_HEIGHTS.medium,
        selectedKey,
        topOffset: PICKER_TOP_OFFSET,
      }),
    [selectedKey]
  );

  const onChange = useCallback((key: ItemKey | null): void => {
    setSelectedKey(key);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SampleSection name="pickers">
      <h2 className="ui-title">Pickers</h2>

      <Flex gap={14} direction="column">
        {[Picker, ComboBox].map(Component => {
          const label = (suffix: string) =>
            `${Component === Picker ? 'Picker' : 'ComboBox'} (${suffix})`;

          return (
            <Flex key={Component.displayName} direction="row" gap={14}>
              <Component
                label={label('Single Child')}
                tooltip={{ placement: 'bottom-end' }}
              >
                <Item textValue="Aaa">Aaa</Item>
              </Component>
              <Component
                label={label('Mixed Children Types')}
                defaultSelectedKey="999"
                tooltip
              >
                {mixedItemsWithIconsNoDescriptions}
              </Component>
              <Component label={label('Sections')} tooltip>
                {/* eslint-disable react/jsx-curly-brace-presence */}
                {'String 1'}
                {'String 2'}
                {'String 3'}
                <Section title="Section">
                  <Item textValue="Item Aaa">Item Aaa</Item>
                  <Item textValue="Item Bbb">Item Bbb</Item>
                  <Item textValue="Complex Ccc">
                    <PersonIcon />
                    <Text>Complex Ccc</Text>
                  </Item>
                </Section>
                <Section key="Key B">
                  <Item textValue="Item Ddd">Item Ddd</Item>
                  <Item textValue="Item Eee">Item Eee</Item>
                  <Item textValue="Complex Fff">
                    <PersonIcon />
                    <Text>Complex Fff</Text>
                  </Item>
                  <Item textValue="Ggg">
                    <PersonIcon />
                    <Text>Label</Text>
                    <Text slot="description">Description</Text>
                  </Item>
                  <Item textValue="Hhh">
                    <PersonIcon />
                    <Text>Label that causes overflow</Text>
                    <Text slot="description">
                      Description that causes overflow
                    </Text>
                  </Item>
                </Section>
                <Section title="Section A">{itemElementsA}</Section>
                <Section title="Section B">{itemElementsB}</Section>
                <Section key="Section C">{itemElementsC}</Section>
                <Section key="Section D">{itemElementsD}</Section>
                <Section title="Section E">{itemElementsE}</Section>
              </Component>
            </Flex>
          );
        })}

        <Checkbox
          checked={showIcons}
          onChange={e => setShowIcons(e.currentTarget.checked)}
        >
          Show Ions
        </Checkbox>

        <Flex direction="row" gap={14}>
          <PickerNormalized
            label="Picker (Controlled)"
            getInitialScrollPosition={getInitialScrollPosition}
            normalizedItems={itemsWithIcons}
            selectedKey={selectedKey}
            showItemIcons={showIcons}
            onChange={onChange}
          />
          <ComboBoxNormalized
            label="ComboBox (Controlled)"
            getInitialScrollPosition={getInitialScrollPosition}
            normalizedItems={filteredItems}
            selectedKey={selectedKey}
            showItemIcons={showIcons}
            onChange={onChange}
            validationState={selectedKey == null ? 'invalid' : 'valid'}
            errorMessage="Please select an item."
            onInputChange={onSearch}
          />
        </Flex>
      </Flex>
    </SampleSection>
  );
}

export default Pickers;
