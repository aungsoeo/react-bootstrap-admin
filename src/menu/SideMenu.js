import { Header, MenuItem } from ".";

export function SideMenu() {
  return (
    <>
      <Header title="GHOST ADMIN" />
      <div className="list-group text-center text-lg-start">
        <span className="list-group-item disabled d-none d-lg-block">
          <small>CONTROLS</small>
        </span>
        <MenuItem icon="home" label="Dashboard" active="true"/>
        <MenuItem icon="users" label="Users">
          <span className="d-none d-lg-inline badge bg-danger rounded-pill float-end">
            20
          </span>
        </MenuItem>
        <MenuItem icon="chart-line" label="Statistics" />
        <MenuItem icon="flag" label="Reports" />
      </div>
      <div className="list-group text-center text-lg-start mt-4">
        <span className="list-group-item disabled d-none d-lg-block">
          <small>ATCIONS</small>
        </span>
        <MenuItem icon="user" label="New User" />
        <MenuItem icon="edit" label="Update Data" />
        <MenuItem icon="calendar-alt" label="Add Events" />
      </div>
    </>
  );
}
