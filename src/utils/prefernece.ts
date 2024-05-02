export const DEFAULT_PREFERENCES = ({ contentDisplay }: any) => {
    return {
        pageSize: 30,
        contentDisplay: contentDisplay,
        wrapLines: false,
        stripedRows: false,
        stickyColumns: { first: 0, last: 1 },
    }
};