import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";

/** @description Returns the Google Maps loader object */
export const googleConfig = async (loaderOptions?: LoaderOptions) => {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
    version: "weekly",
    ...loaderOptions,
  });

  return loader;
};
