import { useMemo, useState } from "react";

export const usePagination = (totalItems, limit) => {
    const [pagesNumbers, setPagesNumbers] = useState([]);
    
    useMemo(() => {
        const totalPages = Math.ceil(totalItems / limit);
        let result = [];
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1);
        }
        setPagesNumbers(result);
    }, [totalItems, limit])

     return pagesNumbers;
}