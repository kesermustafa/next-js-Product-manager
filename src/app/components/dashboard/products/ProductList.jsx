import React from 'react';

const ProductList = ({ products = [] }) => {
    if (!products?.length) {
        return <div className="text-center text-gray-500">Ürün bulunamadı.</div>;
    }

    // Özel responsive sınıflar
    const tableRowClass = "block sm:table-row border rounded sm:border-0 shadow-sm sm:shadow-none my-4 sm:my-0";
    const tableCellClass = "py-2 px-4 sm:border-b block sm:table-cell";
    const labelClass = "inline-block w-24 font-bold sm:hidden";
    const headerClass = "hidden sm:table-header-group bg-gray-100 text-left text-gray-600";

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white border whitespace-nowrap text-sm lg:text-lg border-gray-200">
                <thead className={headerClass}>
                <tr>
                    <th className="py-3 px-4 border-b font-medium">#</th>
                    <th className="py-3 px-4 border-b font-medium">TITLE</th>
                    <th className="py-3 px-4 border-b font-medium">CATEGORY</th>
                    <th className="py-3 px-4 border-b font-medium">PRICE</th>
                    <th className="py-3 px-4 border-b text-center font-medium">EDIT</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={product.id} className={tableRowClass}>
                        <td className={tableCellClass}>
                            <div className="flex items-center">
                                <span className={labelClass}>No</span>
                                <span>{index + 1}</span>
                            </div>
                        </td>
                        <td className={tableCellClass}>
                            <div className="flex items-center">
                                <span className={labelClass}>Title</span>
                                <span className="font-semibold sm:font-normal">{product.title}</span>
                            </div>
                        </td>
                        <td className={tableCellClass}>
                            <div className="flex items-center">
                                <span className={labelClass}>Category</span>
                                <span>{product.category}</span>
                            </div>
                        </td>
                        <td className={tableCellClass}>
                            <div className="flex items-center">
                                <span className={labelClass}>Price</span>
                                <span className="text-green-700 font-bold">${product.price}</span>
                            </div>
                        </td>
                        <td className={`${tableCellClass}`}>
                            <div className="flex gap-2 sm:justify-center">
                                <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                    Edit
                                </button>
                                <button className="flex-1 sm:flex-none px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;