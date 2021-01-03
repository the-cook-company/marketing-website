import { FunctionComponent } from "react";
import { AssetDownload } from "./asset-download";

type AssetDownloadComposerProps = {
  element: Contentful.IAssetDownload;
};

const AssetDownloadComposer: FunctionComponent<AssetDownloadComposerProps> = ({
  element,
}) => {
  return (
    <AssetDownload
      title={element.fields.asset.fields.title}
      description={element.fields.asset.fields.description}
      fileName={element.fields.asset.fields.file.fileName}
      fileSize={element.fields.asset.fields.file.details.size}
      fileUrl={element.fields.asset.fields.file.url}
    />
  );
};

export { AssetDownloadComposer };
