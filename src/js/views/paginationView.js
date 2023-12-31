import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.results');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);
      handler();
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //Scenarios:
    //Page 1, there are other pages
    if (currPage === 1 && numPages > 1) {
      return `<button class="btn--inline pagination__btn--next">
      <span>Page ${currPage + 1} </span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> `;
    }
    //Last Page
    if (currPage === numPages && numPages > 1) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1} </span>
    </button>`;
    }
    //Other page
    if (currPage < numPages) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1} </span>
    </button>
    <button class="btn--inline pagination__btn--next">
      <span>Page ${currPage + 1} </span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
  }
}

export default new PaginationView();
