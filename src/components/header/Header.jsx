import './header.css';

const Header = ({title, subtext, imageref}) => (
  <div className='container'>
    <img class="image" src={imageref} alt='header image' />
    <h1 className='title'>{title}</h1>
    <p className='subtitle'>{subtext}</p>
  </div>
);

export default Header;
