export const sanitizeContent = (content: string): string => {
    const contentWithoutIcons = removeIcons(content);

    return contentWithoutIcons
        .replace(/&amp;/g, '&')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/({~|~})/g, '')
        .replace(/(\\n|&nbsp;|\s\s+)/g, ' ')
        .trim();
};

const removeIcons = (content: string): string => {
    const iconExtractor = new RegExp(`{@icon-[\\s\\S-]*?@}`, 'g');
    const matches = content.match(iconExtractor);

    if (matches) {
        const iconsToRemove = matches.join('|');
        const iconsToRemoveRegex = new RegExp(iconsToRemove, 'g');

        return content.replace(iconsToRemoveRegex, '');
    }

    return content;
};
