'use client';

import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

export default function FooterDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['English']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          className="capitalize w-[90px] border-none outline-none"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="bg-white border-2 rounded-md border-gray-custom-100 cursor-pointer"
      >
        <DropdownItem key="English">English</DropdownItem>
        <DropdownItem key="Bulgarian">Bulgarian</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
