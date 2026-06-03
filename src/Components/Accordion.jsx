import { useState } from "react";

/*
  Accordion Component

  Props:
  - items: array of { question, answer }
  - allowMultiple: allow multiple items open (default false)
  - defaultOpen: index (or array of indexes) to open by default
*/

export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = null,
}) {
  // STATE: tracks which items are open

  const [openIndexes, setOpenIndexes] = useState(() => {
    // If multiple allowed → use array
    if (allowMultiple) {
      return Array.isArray(defaultOpen) ? defaultOpen : [];
    }

    // If single → use one index or null
    return typeof defaultOpen === "number" ? defaultOpen : null;
  });

  // FUNCTION: handles clicking an item
  const handleToggle = (index) => {
    if (allowMultiple) {
      // MULTIPLE OPEN MODE

      setOpenIndexes((prev) => {
        // If already open → remove it
        if (prev.includes(index)) {
          return prev.filter((i) => i !== index);
        }

        // Otherwise → add it
        return [...prev, index];
      });
    } else {
      // SINGLE OPEN MODE

      setOpenIndexes((prev) => (prev === index ? null : index));
    }
  };

  // FUNCTION: check if item is open
  const isOpen = (index) => {
    if (allowMultiple) {
      return openIndexes.includes(index);
    }
    return openIndexes === index;
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8">
      {/* Loop through FAQ items */}
      {items.map((item, index) => {
        const open = isOpen(index);

        return (
          <div key={index} className="border-b border-gray-200 py-4">
            {/* HEADER (Clickable area) */}
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              {/* Question */}
              <span className="text-base md:text-lg font-medium text-gray-900">
                {item.question}
              </span>

              {/* Icon (rotates when open) */}
              <span
                className={`ml-4 transform transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* CONTENT (Answer) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
