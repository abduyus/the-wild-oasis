import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
/**
 * Reusable URL-based filter component.
 *
 * Renders a group of filter buttons and synchronizes
 * the selected filter value with the URL query string
 * using `react-router-dom`'s `useSearchParams`.
 *
 * This allows filter state to:
 * - Persist on page refresh
 * - Be shareable via URL
 * - Integrate naturally with routing
 *
 * @component
 *
 * @param {Object} props
 * @param {string} props.filterField
 * The name of the query parameter to control (e.g., "status", "sortBy").
 *
 * @param {{ value: string, label: string }[]} props.options
 * Array of filter options. Each option must contain:
 * - `value`: The value stored in the URL
 * - `label`: The text displayed in the button
 *
 * @returns {JSX.Element}
 *
 * @example
 * <Filter
 *   filterField="status"
 *   options={[
 *     { value: "all", label: "All" },
 *     { value: "active", label: "Active" },
 *     { value: "archived", label: "Archived" },
 *   ]}
 * />
 */
function Filter({ filterField, options }) {
  /**
   * React Router hook for reading and updating
   * URL search parameters.
   */
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * The currently selected filter value.
   * Falls back to the first option if no query param exists.
   *
   * @type {string}
   */
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  /**
   * Updates the URL query parameter when
   * a filter button is clicked.
   *
   * @param {string} value - The selected filter value.
   */
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
