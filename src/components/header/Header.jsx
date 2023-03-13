import './header.css';

const Header = ({title, subtext, imageref}) => (
  <div className='container'>
    <img className='container__logo'
        src={imageref}
        alt="logo image"
      />
      <div style={{ display: 'inline-block', marginLeft: '30px' }}>
        <h2 className='container__title'>{title}</h2>
        <p className='container__subtitle'>{subtext}</p>
      </div>
  </div>
);

export default Header;
