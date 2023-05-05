export const calcPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}