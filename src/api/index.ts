import { createClient } from "contentful";
import { showToast } from "../utils/toast";
import { mapContentfulDataToFaq } from "../utils/responseMapping";

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
});

export const getContentfulData = async () => {
  try {
    const res = await client.getEntries({
      content_type: "accordion",
      include: 2,
    });
    const mappedData = mapContentfulDataToFaq(res as any);
    return mappedData;
  } catch (error: any) {
    showToast(error.message || "Something went wrong");
    throw error;
  }
};
