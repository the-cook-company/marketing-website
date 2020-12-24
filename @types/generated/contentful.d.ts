// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

declare namespace Contentful {
  export interface IAddressFields {
    /** Name */
    name: string;

    /** Email */
    email: string;

    /** Physical */
    physical: { lat: number; lon: number };

    /** Phone */
    phone: string;
  }

  export interface IAddress extends Entry<IAddressFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "address";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export interface IAssetDownloadFields {
    /** Name */
    name: string;

    /** Asset */
    asset: Asset;
  }

  export interface IAssetDownload extends Entry<IAssetDownloadFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "assetDownload";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export interface IContactFields {
    /** Name */
    name: string;

    /** Tagline */
    tagline: string;

    /** SMTP Connection URL */
    smtpConnectionUrl: string;
  }

  export interface IContact extends Entry<IContactFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "contact";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export interface IFooterFields {
    /** Name */
    name: string;

    /** Logo */
    logo: Asset;
  }

  export interface IFooter extends Entry<IFooterFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "footer";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export interface IHeroFields {
    /** Name */
    name: string;

    /** Tagline */
    tagline: string;

    /** Image */
    image: Asset;
  }

  export interface IHero extends Entry<IHeroFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "hero";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export interface INavigationBarFields {
    /** Name */
    name: string;

    /** Logo */
    logo: Asset;

    /** Pages */
    pages: IPage[];
  }

  export interface INavigationBar extends Entry<INavigationBarFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "navigationBar";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export interface IPageFields {
    /** Title */
    title: string;

    /** Slug */
    slug: string;

    /** Description */
    description: string;

    /** Image */
    image: Asset;

    /** Content */
    content: Document;
  }

  export interface IPage extends Entry<IPageFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "page";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export type CONTENT_TYPE =
    | "address"
    | "assetDownload"
    | "contact"
    | "footer"
    | "hero"
    | "navigationBar"
    | "page";

  export type LOCALE_CODE = "en-US";

  export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
}

export as namespace Contentful;
export = Contentful;