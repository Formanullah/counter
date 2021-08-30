import React, { Component } from "react";
import _ from "lodash";
class Pagination extends Component {
  state = {};
  render() {
    const { total, pageCount, activePage, onChangePage } = this.props;
    const totalPage = Math.ceil(total / pageCount);
    const pages = _.range(1, totalPage + 1, 1);
    console.log(pages);

    return (
      <>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" style={{cursor: "pointer"}}
              onClick={() => activePage-1 >= 1 ? onChangePage(activePage-1): null}
              >
                Previous
              </a>
            </li>
            {pages.map((page) => (
              <li
                onClick={() => onChangePage(page)}
                class={page === activePage ? "page-item active" : "page-item"}
              >
                <a class="page-link" href="#" style={{cursor: "pointer"}}>
                  {page}
                </a>
              </li>
            ))}

            <li class="page-item">
              <a class="page-link" href="#"
               onClick={() => activePage+1 <= totalPage ? onChangePage(activePage+1): null}
               style={{cursor: "pointer"}}
               >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Pagination;
