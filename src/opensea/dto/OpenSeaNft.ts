export class OpenSeaNft {
    /** NFT Identifier (also commonly referred to as Token Id) */
    identifier: string;
    /** Slug identifier of collection */
    collection: string;
    /** Address of contract */
    contract: string;
    /** Token standard, i.e. ERC721, ERC1155, etc. */
    token_standard: string;
    /** Name of NFT */
    name: string;
    /** Description of NFT */
    description: string;
    /** URL of image */
    image_url: string;
    /** URL of metadata */
    metadata_url: string;
    /** Date of NFT creation */
    created_at: string;
    /** Date of latest NFT update */
    updated_at: string;
    /** Whether NFT is disabled for trading on OpenSea */
    is_disabled: boolean;
    /** Whether NFT is NSFW (Not Safe For Work) */
    is_nsfw: boolean;
}