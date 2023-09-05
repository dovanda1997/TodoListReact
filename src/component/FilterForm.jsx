import React, { useState } from "react";
import FilterOption from "./FilterOption";
/**
 *
 * @typeof FilterFormProps
 */

const FilterForm = ({ filtervalue, onFilterChange }) => {
  return (
    <>
      <div className="flex jus-content m-b">
        <FilterOption
          label="Tat ca"
          value="all"
          checked={filtervalue === "all"}
          onChange={onFilterChange}
        ></FilterOption>
        <FilterOption
          label="Hoan thanh"
          value="done"
          checked={filtervalue === "done"}
          onChange={onFilterChange}
        ></FilterOption>
        <FilterOption
          label="Chua hoan thanh"
          value="doing"
          checked={filtervalue === "doing"}
          onChange={onFilterChange}
        ></FilterOption>
      </div>
    </>
  );
};

export default FilterForm;
