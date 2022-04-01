import HomePage from '../../page_objects/Home.page'
import SearchResultsPage from '../../page_objects/SearchResults.page'

const homePage = new HomePage()
const searchResultsPage = new SearchResultsPage()

describe('Search Functionality Tests', () => {
  beforeEach(() => {
    homePage.visit()
  })
  it('Test that search keyword is present in search results page', () => {
    var searchKeyword = 'Test 123'
    homePage.searchFor(searchKeyword)
    searchResultsPage.searchTermAssert(searchKeyword)
  })
  it('Empty search term results in specific search results message', () => {
    var searchResultsMessage = 'Please enter a search keyword'
    homePage.searchFor()
    searchResultsPage.searchTermAssert(searchResultsMessage)
  })
})