import PropTypes from 'prop-types';

export function Footer({ handleToggleModal, data }) {
  return (
    <footer>
      <div className='bgGradient'></div>
      <div>
        <h1>Astronomy Picture of the Day Project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className='fa-solid fa-circle-info'></i>
      </button>
    </footer>
  );
}

Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Footer;
