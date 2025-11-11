export interface ContentfulData {
  total: number;
  skip: number;
  limit: number;
  items: ContentfulItems[];
}

export interface ContentfulItems {
  metadata: any;
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: any;
    publishedVersion: number;
    revision: number;
    contentType: any;
    locale: string;
  };
  fields: {
    internalName: string;
    title: string;
    accordionItems: AccordionItems[];
  };
}

export interface AccordionItems {
  metadata: any;
  sys: any;
  fields: {
    internalName: string;
    name: string;
    text: string;
  };
}
export interface FAQ {
  id: string;
  internalName: string;
  title: string;
  items: FAQItem[];
}

export interface FAQItem {
  id: string;
  name: string;
  text: string;
}
