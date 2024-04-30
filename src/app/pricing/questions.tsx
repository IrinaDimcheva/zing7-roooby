'use client';

import { useState } from 'react';
import { questions } from '@/data/data';
import QuestionItem from './question-item';

export default function Questions() {
  const [active, setActive] = useState(null);

  function handleToggle(index) {
    setActive((prevIndex) => (prevIndex === index ? null : index));
  }
  return (
    <section className="max-w-screen-wide mx-auto px-4 py-20 sm:py-24">
      <h2 className="text-5xl md:text-[64px] font-bold md:leading-[74px] tracking-[-0.89px] max-w-[594px] pb-16">
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
