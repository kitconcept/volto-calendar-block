/**
 * Saves a change made in the settings form of the block.
 *
 * Follows the signature of Volto's data adapters, so the settings form can
 * call it for every field.
 *
 * @param {Object} args
 * @param {string} args.block The ID of the block being edited.
 * @param {Object} args.data The block data before the change.
 * @param {string} args.id The name of the changed field.
 * @param {Function} args.onChangeBlock Saves the block data.
 * @param {*} args.value The new value of the field.
 */
export const SearchBlockDataAdapter = ({
  block,
  data,
  id,
  onChangeBlock,
  value,
}) => {
  onChangeBlock(block, {
    ...data,
    [id]: value,
  });
};

export default SearchBlockDataAdapter;
