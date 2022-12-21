import React from 'react';

const Pagination = ({ perPage, totalUsers, paginate }: any) => {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalUsers / perPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <div key={number} className="waves-effect">
                    <p onClick={() => paginate(number)}>{number}</p>
                </div>
            ))}
        </div>
    );
};

export default Pagination;