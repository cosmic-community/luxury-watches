export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    image?: CosmicFile;
  };
}

export interface Variant extends CosmicObject {
  type: 'variants';
  metadata: {
    variant_name?: string;
    case_material?: string;
    strap_type?: string;
    dial_color?: string;
    price_adjustment?: number;
    sku?: string;
    stock_quantity?: number;
    image?: CosmicFile;
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    name?: string;
    description?: string;
    base_price?: number;
    sku?: string;
    gallery?: CosmicFile[];
    inventory_status?: unknown;
    stock_quantity?: number;
    featured?: boolean;
    category?: Category;
    variants?: Variant[];
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    rating?: number;
    review_title?: string;
    review_body?: string;
    verified_purchase?: boolean;
    review_date?: string;
    product?: Product;
  };
}