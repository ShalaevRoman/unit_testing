export const fromFlatToTree = (flatArr, parentItem) => {
    return flatArr.reduce(
        (acc, item) => {
            if (item.pid === acc.id) {
                acc.children.push({ ...item, children: [] });
            }

            acc.children.map((childrenItem) => {
                if (childrenItem.id === item.pid) {
                    childrenItem.children.push({ ...item, children: [] });
                    return childrenItem;
                }
            });

            return acc;
        },
        { ...parentItem, children: [] }
    );
};