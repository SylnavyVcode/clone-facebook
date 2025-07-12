// components/ui/Accordion.tsx
import { useState, createContext, useContext, ReactNode } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid"; // <- Heroicon utilisé
import { cn } from "../../utils";

type AccordionContextType = {
  openItems: string[];
  toggleItem: (id: string) => void;
  type: "single" | "multiple";
};

const AccordionContext = createContext<AccordionContextType | null>(null);

type AccordionProps = {
  children: ReactNode;
  defaultValue?: string;
  type?: "single" | "multiple";
};

export const Accordion = ({
  children,
  defaultValue = "",
  type = "single",
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultValue ? [defaultValue] : []
  );

  const toggleItem = (id: string) => {
    if (type === "single") {
      setOpenItems((prev) => (prev[0] === id ? [] : [id]));
    } else {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className="border rounded-md divide-y">{children}</div>
    </AccordionContext.Provider>
  );
};

type AccordionItemProps = {
  children: ReactNode;
  value: string;
};

export const AccordionItem = ({ children, value }: AccordionItemProps) => (
  <div data-accordion-item={value} className="border-b">
    {children}
  </div>
);

type AccordionTriggerProps = {
  children: ReactNode;
  value: string;
  className?: string;
};

export const AccordionTrigger = ({
  children,
  value,
  className,
}: AccordionTriggerProps) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionTrigger must be used within Accordion");

  const isOpen = ctx.openItems.includes(value);

  return (
    <button
      onClick={() => ctx.toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline",
        className
      )}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          "h-5 w-5 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

type AccordionContentProps = {
  children: ReactNode;
  value: string;
  className?: string;
};

export const AccordionContent = ({
  children,
  value,
  className,
}: AccordionContentProps) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionContent must be used within Accordion");

  const isOpen = ctx.openItems.includes(value);

  return (
    <div
      id={`accordion-content-${value}`}
      hidden={!isOpen}
      className={cn(
        "overflow-hidden text-sm transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
};
