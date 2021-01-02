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

  export interface IBlockFields {
    /** Name */
    name: string;

    /** Constrain Width */
    constrainWidth: boolean;

    /** Has Spacing */
    hasSpacing: boolean;

    /** Element */
    element:
      | IAddress
      | IAssetDownload
      | IContact
      | IFooter
      | IImage
      | INavigationBar
      | IPage
      | IRichText;
  }

  export interface IBlock extends Entry<IBlockFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "block";
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

  export interface IImageFields {
    /** Name */
    name: string;

    /** Tagline */
    tagline?: string | undefined;

    /** Image */
    image: Asset;
  }

  export interface IImage extends Entry<IImageFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "image";
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

    /** LogoEntry */
    logoEntry: IPage;

    /** Entries */
    entries: IPage[];
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

    /** Call to Action */
    callToAction: string;

    /** Image */
    image: Asset;

    /** Blocks */
    blocks: IBlock[];
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

  export interface IRichTextFields {
    /** Name */
    name: string;

    /** Rich Text */
    richText: Document;
  }

  export interface IRichText extends Entry<IRichTextFields> {
    sys: {
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      locale: string;
      contentType: {
        sys: {
          id: "richText";
          linkType: "ContentType";
          type: "Link";
        };
      };
    };
  }

  export type CONTENT_TYPE =
    | "address"
    | "assetDownload"
    | "block"
    | "contact"
    | "footer"
    | "image"
    | "navigationBar"
    | "page"
    | "richText";

  export type LOCALE_CODE = "en-US";

  export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
}

export as namespace Contentful;
export = Contentful;
