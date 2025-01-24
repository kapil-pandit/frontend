import React from "react";
import axios from "axios";
import ExcelJS from "exceljs";

const DownloadExcel = () => {
  const fetchAndDownload = async () => {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Large Dataset");

      // Define column headers
      worksheet.columns = [
        { header: "ID", key: "id", width: 10 },
        { header: "Name", key: "name", width: 30 },
        { header: "Value", key: "value", width: 30 },
      ];

      const pageSize = 1000; // Number of records per page
      let currentPage = 1;
      let hasMoreData = true;

      while (hasMoreData) {
        // Fetch chunk data from pagination API
        const response = await axios.get(
          `http://your-backend-url/api/data?page=${currentPage}&limit=${pageSize}`
        );

        const { data, totalPages } = response.data;

        // Add rows to the worksheet
        data.forEach((row) => {
          worksheet.addRow(row);
        });

        console.log(`Fetched page ${currentPage}/${totalPages}`);

        // Update loop conditions
        currentPage++;
        hasMoreData = currentPage <= totalPages;
      }

      // Once all data is fetched, save the Excel file
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Trigger file download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "large_dataset.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Excel file downloaded successfully.");
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  return (
    <div>
      <h1>Download Large Dataset</h1>
      <button onClick={fetchAndDownload}>Download Excel</button>
    </div>
  );
};

export default DownloadExcel;
