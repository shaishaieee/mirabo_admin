import React, { useState } from "react";
import "../css/CsvExcelUpload.css";
import * as XLSX from "xlsx";
import { FaUpload } from "react-icons/fa";

const CsvExcelUpload = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Excelファイルタイプのみを選択してください");
        setExcelFile(null);
      }
    } else {
      console.log("PLease select your file");
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 11));
    }
  };

  return (
    <>
      <div className="csvexcelupload">
        <h1>CVS/Excel ファイル</h1>

        <div className="csvexcel-content">
          <h3>CSVまたはExcelシートをアップロードする</h3>

          <div className="upload-area">
            <form action="" onSubmit={handleFileSubmit}>
              <input
                type="file"
                className="form-control"
                required
                onChange={handleFile}
              />
              <button className="submit-upload" type="submit">
                {" "}
                <i>
                  <FaUpload />
                </i>
                アップロード
              </button>
            </form>

            {typeError && (
              <div className="alert" role="alert">
                {typeError}
              </div>
            )}
          </div>

          <div className="data-viewer">
            {excelData ? (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      {Object.keys(excelData[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {excelData.map((individualExcelData, index) => (
                      <tr key={index}>
                        {Object.keys(individualExcelData).map((key) => (
                          <td key={key}>{individualExcelData[key]}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="warning">
                ファイルがアップロードされていません
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CsvExcelUpload;
