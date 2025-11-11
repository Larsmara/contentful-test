import type {
  AccordionItems,
  ContentfulData,
  ContentfulItems,
  FAQ,
  FAQItem,
} from "../types";

export function mapContentfulDataToFaq(data: ContentfulData): FAQ[] {
  if (!data?.items) return [];
  return data.items.map(mapContentfulItem);
}

// Mapper ett FAQ-objekt
function mapContentfulItem(item: ContentfulItems): FAQ {
  const accordionItems = item.fields.accordionItems || [];

  return {
    id: item.sys.id,
    internalName: item.fields.internalName,
    title: item.fields.title,
    items: accordionItems.map(mapAccordionItem),
  };
}

// Mapper hvert spørsmål/svar-par (accordion item)
function mapAccordionItem(entry: AccordionItems): FAQItem {
  return {
    id: entry.sys?.id ?? crypto.randomUUID(),
    name: entry.fields.name,
    text: entry.fields.text,
  };
}
