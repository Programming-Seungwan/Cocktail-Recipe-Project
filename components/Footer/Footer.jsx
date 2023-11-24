import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div>This is Footer Component!</div>
      <div>
        <button>
          <Link to='/random'>랜덤</Link>
        </button>
        <button>
          <Link to='/category'>카테고리별</Link>
        </button>
        <button>
          <Link to='/ingredient'>재료별</Link>
        </button>
      </div>
    </>
  );
}
