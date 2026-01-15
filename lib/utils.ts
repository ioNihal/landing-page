export function normalizeString(str: string) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
};

export function denormalizeAndCapitalizeString(str: string) {
    return str
        .trim()
        .toLowerCase()
        .split("-")
        .map(word => word
            .charAt(0)
            .toUpperCase() + word.slice(1)
        ).join(" ");
}