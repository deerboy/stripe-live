import algoliasearch from "algoliasearch/lite";

const client = algoliasearch("DU17SOR8L8", "2cab0f3a74619ca7521cb83b88f5ae30");

export const videoIndex = client.initIndex("videos");
export const videoIndexAsc = client.initIndex("videos-minutes-asc");
