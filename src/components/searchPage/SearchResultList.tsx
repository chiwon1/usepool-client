import React, { FC } from 'react';

const SearchResultList: FC = () => {
  return (
    <ul>
      <li>
        <button>
          <span>
            <span>
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <g>
                  <g>
                    <circle />
                    <path />
                  </g>
                </g>
              </svg>
            </span>
            <span />
          </span>
        </button>
        <div>
          <hr />
        </div>
      </li>
    </ul>
  );
};

export default SearchResultList;
