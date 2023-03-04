import React from 'react';

export default function useSearchValue(items) {
  const [searchValue, setSearchItem] = React.useState('');

  let searchItem = [];

  if (!searchValue.length >= 1) {
    searchItem = items;
  } else {
    searchItem = items.filter((item) => {
      const itemText = item.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return itemText.includes(searchText);
    });
  }

  return {
    searchValue,
    searchItem,
    setSearchItem,
  };
}
