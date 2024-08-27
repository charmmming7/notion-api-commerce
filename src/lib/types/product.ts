export interface ProductProps {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: null | any;
  icon: null | any;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: string;
}

export interface ParsedProductProps {
  id: string;
  name: string;
  brand: string;
  colors?: string[];
  imgType?: string;
  imgSrc?: string;
  price: number;
  discountedPrice?: number;
  tags?: tagProps[];
  salesInfo?: string;
  quantity?: number;
  content?: string;
  category: string;
}

export interface ParsedProductInfoProps {
  id: string;
  name: string;
  brand: string;
  colors?: string[];
  imgType?: string;
  imgSrc?: string;
  price: number;
  discountedPrice?: number;
  tags?: tagProps[];
  salesInfo?: string;
  quantity?: number;
  content?: string;
  category: string;
}

interface tagProps {
  name: string;
  color: string;
}

export interface ProductListProps extends ProductProps {
  request_id: string;
}

// base interface

interface User {
  object: string;
  id: string;
}

interface Parent {
  type: 'database_id' | 'page_id' | 'block_id' | 'workspace';
  database_id?: string;
  block_id?: string;
  workspace?: true;
}

interface RichText {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

interface File {
  name: string;
  type: 'external' | 'file';
  external?: {
    url: string;
  };
  file?: {
    url: string;
  };
}

interface RichTextProperty {
  id: string;
  type: 'rich_text';
  rich_text: RichText[];
}

interface NumberProperty {
  id: string;
  type: 'number';
  number: number | null;
}

interface FilesProperty {
  id: string;
  type: 'files';
  files: File[];
}

export interface MultiSelectProperty {
  id: string;
  type: 'multi_select';
  multi_select: MultiSelect[];
}

interface SelectProperty {
  id: string;
  type: 'select';
  select: SelectOption | null;
}

interface TitleProperty {
  id: string;
  type: 'title';
  title: RichText[];
}

interface MultiSelect {
  id: string;
  name: string;
  color: string;
}

interface SelectOption {
  id: string;
  name: string;
  color: string;
}

export interface Properties {
  brand: RichTextProperty;
  discountedPrice?: NumberProperty;
  salesInfo?: RichTextProperty;
  quantity: NumberProperty;
  thumbnail?: FilesProperty;
  colors?: MultiSelectProperty;
  price: NumberProperty;
  tags?: MultiSelectProperty;
  category: SelectProperty;
  name: TitleProperty;
}
