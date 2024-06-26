'use client';

import { useState } from 'react';
import { questions } from '@/data/data';
import QuestionItem from './question-item';

export default function Questions() {
  const [active, setActive] = useState(-1);

  function handleToggle(index: number) {
    setActive((prevIndex) => (prevIndex === index ? -1 : index));
  }
  return (
    <section className="max-w-screen-wide mx-auto px-4 py-20 sm:py-24">
      <h2 className="text-5xl font-bold md:headline-h1 max-w-[594px] pb-16">
        Frequently asked questions
      </h2>
      <ul className="mr-0">
        {questions.map((item, index) => (
          <QuestionItem
            key={item.title}
            title={item.title}
            text={item.text}
            isOpen={active === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </ul>
    </section>
  );
}
