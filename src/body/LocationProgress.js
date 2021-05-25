function LocationProgress(props) {
  return (
    <>
      <small className="text-muted">{props.title}</small>
      <div
        className="progress mb-4 mt-2"
        style={{
          height: "5px",
        }}
      >
        <div
          className={`progress-bar ${props.colorClass} ${props.percent}`}
        ></div>
      </div>
    </>
  );
}

export default LocationProgress;
