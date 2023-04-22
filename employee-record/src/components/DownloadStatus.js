import React from "react";
import "../assests/Css/DownloadStatus.css";
function DownloadStatus({ download_total, download_complete, download_size }) {
    let downloadPercentage = (x,y)=>{
        return (x*100)/y;
    };
    let value = downloadPercentage(parseFloat(download_complete),parseFloat(download_total));
    return (
    <div className="downloadStatus-wrapper">
      <div className="progressBar">
        <div className="progressBarValue" style={{ width:value?value+"%":"0%"}}></div>
      </div>
      <p className="downloadInfo">{download_complete?download_complete:0} {download_size?download_size:"Size"} of {download_total?download_total:0} {download_size?download_size:"Size"}</p>
    </div>
  );
}
export default DownloadStatus;
