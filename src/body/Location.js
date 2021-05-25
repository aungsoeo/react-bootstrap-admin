import LocationProgress from "./LocationProgress";

function Location() {
  return (
    <div className="col">
      <h2 className="h6 text-white-50">LOCATION</h2>
      <div className="card" style={{height: '280px'}}>
        <div className="card-body">
          <LocationProgress
            title="Regional"
            colorClass="bg-success"
            percent="w-25"
          />
          <LocationProgress
            title="Global"
            colorClass="bg-primary"
            percent="w-75"
          />
          <LocationProgress
            title="Local"
            colorClass="bg-warning"
            percent="w-50"
          />
          <LocationProgress
            title="Internal"
            colorClass="bg-danger"
            percent="w-25"
          />
        </div>
      </div>
    </div>
  );
}

export default Location;
