export class SearchResult {
  paging: {
    limit: number,
    offset: number,
    total: number
  };

  results: {
    address: {
      address_line: '',
      city: '',
      country: ''
    },
    description: '',
    id: '',
    agency_code: '',
    distance: ''
  }[];

}
