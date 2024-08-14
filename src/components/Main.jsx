import PropTypes from 'prop-types';

export function Main({ data }) {
  return (
    <div className='imageContainer'>
      <img
        src={data.hdurl}
        alt={data.title || 'background image'}
        className='bgImage'
      />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
