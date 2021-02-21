import React from 'react';

const Pagination = ({ currentpage, itemsParPage, length, onPageChanged }) => {

    const pagesCount = Math.ceil(length / itemsParPage);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <ul className="pagination pagination-sm">
                <li className={"page-item" + (currentpage === 1 && " disabled")}>
                    <button className="page-link" onClick={() => onPageChanged(currentpage - 1)}>&laquo;</button>
                </li>
                {pages.map(page =>
                    <li key={page} className={"page-item" + (currentpage === page && " active")}>
                        <button className="page-link" onClick={() => onPageChanged(page)}>{page}</button>
                    </li>
                )}
                <li className={"page-item" + (currentpage === pagesCount && " disabled")}>
                    <button className="page-link" onClick={() => onPageChanged(currentpage + 1)}>&raquo;</button>
                </li>
            </ul>
        </div>
    );
}

Pagination.getData = (items, currentpage, itemsParPage) => {
    const start = currentpage * itemsParPage - itemsParPage;
    return items.slice(start, start + itemsParPage);
}

export default Pagination;