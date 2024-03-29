import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import * as Label from '@radix-ui/react-label';
import './SearchInput.css';

export default function SearchInput({ setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.3, delay: 0.2 }}
      // En el caso de querer agregar label colocar => padding: 0 20 px, && gap: 15px;
      style={{
        margin: '2rem 0 0',
        display: 'flex',
        padding: '0 0px',
        flexWrap: 'wrap',
        gap: 0,
        alignItems: 'center',
      }}
    >
      <Label.Root className="LabelRoot" htmlFor="Search">
        {/*  */}
      </Label.Root>

      <input
        className="Input"
        type="text"
        id="Search"
        defaultValue=""
        placeholder="Search To-Do's"
        onChange={onSearchValueChange}
        // eslint-disable-next-line no-unneeded-ternary
        disabled={loading ? true : false}
      />
    </motion.div>
  );
}

SearchInput.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
