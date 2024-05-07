'use client';

import { useState } from 'react';

export default function FooterDropdown() {
  const [value, setValue] = useState('en');

  return (
    <div>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none cursor-pointer p-1"
      >
        <option value="en">English</option>
        <option value="bg">Bulgarian</option>
      </select>
    </div>
  );
}
