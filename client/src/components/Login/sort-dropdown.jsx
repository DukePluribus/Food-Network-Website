import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

class SortDropdown extends Component {
  render() {
    // const { selectedSortOption, sortOptions, onClick } = this.props;
    const { sortOptions, onClick } = this.props;
    return (
      <DropdownButton id="dropdown-basic-button" title="Sort by">
        {sortOptions.map(sortOption => (
          <Dropdown.Item key="1" onClick={() => onClick(sortOption)}>
            {sortOption.option}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }
}

export default SortDropdown;
