class ImageData {
  url: string;
  width: number;
  height: number;
}

class PostItemPreviewImages {
  source: ImageData;
  resolutions: ImageData[];
  //variants:
}

class PostItemPreview {
  images: PostItemPreviewImages[];
}

export interface PostItemData {
  subreddit: string;
  title: string;
  preview: PostItemPreview;
}
