import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Header(props) {
  return (
    <h1 className="h4 py-3 text-center text-primary">
      <FontAwesomeIcon icon={['fas', 'ghost']}/>
      <span className="d-none d-lg-inline ms-2">
        {props.title}
      </span>
    </h1>
  );
}