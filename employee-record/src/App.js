import "../src/assests/Css/App.css";
import TableField from "./components/TableField";
import EmployeeName from "./components/EmployeeName";
import Position from "./components/Position";
import Status from "./components/Status";
import DownloadStatus from "./components/DownloadStatus";
import Action from "./components/Action";
import data from "./data.json";

function App() {
  return (
    <div>
      <h1 className="companyName">{data.company_name}</h1>
      <TableField />
      {data.users.map((user) => (
        <div className="row-data">
          <input type="checkbox" className="checkBox" />
          <EmployeeName fullName={user.full_name} />
          <Position position={user.designation} />
          <Status status={user.active_status} />
          <DownloadStatus
            download_total={user.download_completed_rate.total}
            download_complete={user.download_completed_rate.completed}
            download_size={user.download_completed_rate.size_type}
          />
          <Action action={user.invited_status} />
        </div>
      ))}
    </div>
  );
}

export default App;
