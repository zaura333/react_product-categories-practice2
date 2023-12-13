import cn from 'classnames';
import { useState } from 'react';

export const ProductTable = ({
  products, activeSort, onSortSelected, isReversed, onReverseSort,
}) => {
  const [count, setCount] = useState(0);

  const onSortClick = name => () => {
    setCount(prev => prev + 1);
    if (activeSort !== name) {
      onSortSelected(name);
      setCount(0);
    }

    if (count === 1) {
      onReverseSort(true);
    }

    if (count === 2) {
      onSortSelected('');
      onReverseSort(false);
    }
  };

  return (
    <table
      data-cy="ProductTable"
      className="table is-striped is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              ID

              <a
                href="#/"
                onClick={onSortClick('id')}
              >
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={cn('fas', {
                      'fa-sort': activeSort !== 'id',
                      'fa-sort-down': activeSort === 'id' && isReversed,
                      'fa-sort-up': activeSort === 'id' && !isReversed,
                    })}
                  />
                </span>
              </a>
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              Product

              <a
                href="#/"
                onClick={onSortClick('product')}
              >
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={cn('fas', {
                      'fa-sort': activeSort !== 'product',
                      'fa-sort-down': activeSort === 'product' && isReversed,
                      'fa-sort-up': activeSort === 'product' && !isReversed,
                    })}
                  />
                </span>
              </a>
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              Category

              <a
                href="#/"
                onClick={onSortClick('category')}
              >
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={cn('fas', {
                      'fa-sort': activeSort !== 'category',
                      'fa-sort-down': activeSort === 'category' && isReversed,
                      'fa-sort-up': activeSort === 'category' && !isReversed,
                    })}
                  />
                </span>
              </a>
            </span>
          </th>

          <th>
            <span className="is-flex is-flex-wrap-nowrap">
              User

              <a
                href="#/"
                onClick={onSortClick('user')}
              >
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={cn('fas', {
                      'fa-sort': activeSort !== 'user',
                      'fa-sort-down': activeSort === 'user' && isReversed,
                      'fa-sort-up': activeSort === 'user' && !isReversed,
                    })}
                  />
                </span>
              </a>
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        {products.map(product => (
          <tr data-cy="Product" key={product.id}>
            <td className="has-text-weight-bold" data-cy="ProductId">
              {product.id}
            </td>

            <td data-cy="ProductName">{product.name}</td>
            <td data-cy="ProductCategory">
              {`${product.category.icon} - ${product.category.title}`}
            </td>

            <td
              data-cy="ProductUser"
              className={`has-text-${
                product.user.sex === 'm' ? 'link' : 'danger'
              }`}
            >
              {product.user.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
