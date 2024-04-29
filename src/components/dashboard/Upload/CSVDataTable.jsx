import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { Close } from "@mui/icons-material";

const CSVDataTable = ({ data }) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (rowIndex, selectedOptions) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [rowIndex]: selectedOptions,
    }));
  };

  const removeOption = (rowIndex, optionToRemove) => {
    const updatedOptions = selectedOptions[rowIndex].filter(
      (option) => option !== optionToRemove
    );
    setSelectedOptions({
      ...selectedOptions,
      [rowIndex]: updatedOptions,
    });
  };

  return (
    <>
      {data.length === 0 ? "" : (
        <>
          <h3>Uploads</h3>
          <table
            style={{
              backgroundColor: "rgba(245, 245, 245, 1)",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    style={{
                      padding: "10px",
                      border: "none",
                      textAlign: "left",
                      backgroundColor: "rgba(245, 245, 245, 1)",
                      fontFamily: "Figtree",
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, columnIndex) => (
                    <td
                      key={columnIndex}
                      style={{
                        maxWidth: "20vw",
                        border: "none",
                        backgroundColor:
                          rowIndex % 2 === 0
                            ? "white"
                            : "rgba(245, 245, 245, 1)",
                        paddingLeft: "10px", // Add left padding for gap
                        paddingRight: "10px", // Add right padding for gap
                      }}
                    >
                      {columnIndex === 3 ? (
                        <Select
                          multiple
                          style={{
                            width: "100%",
                            height: "2vw",
                            fontSize: "1vw",
                          }}
                          value={selectedOptions[rowIndex] || []}
                          onChange={(e) =>
                            handleOptionSelect(rowIndex, e.target.value)
                          }
                          displayEmpty
                          renderValue={(selected) =>
                            selected.length === 0
                              ? "Select Tags"
                              : selected.join(", ")
                          }
                        >
                          {row[header]
                            .split(", ")
                            .map((option, index) => (
                              <MenuItem key={index} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </Select>
                      ) : columnIndex === 1 ? (
                        <span
                          style={{
                            color: "rgba(91, 147, 255, 1)",
                            textDecoration: "underline",
                          }}
                        >
                          {row[header]}
                        </span>
                      ) : columnIndex === headers.length - 1 ? (
                        <div
                          style={{
                            fontSize: "1vw",
                            color: "white",
                            textAlign: "center",
                            padding: "5px",
                          }}
                        >
                          {selectedOptions[rowIndex]?.map((option, index) => (
                            <span
                              style={{
                                backgroundColor: "rgba(96, 91, 255, 1)",
                                padding: "3px",
                                minWidth: "4vw",
                                marginTop: ".2vw",
                                borderRadius: "4px",
                                marginRight: "5px",
                                display: "inline-block",
                              }}
                              key={index}
                            >
                              {option}
                              <Close
                                onClick={() =>
                                  removeOption(rowIndex, option)
                                }
                                style={{
                                  cursor: "pointer",
                                  marginLeft: "3px",
                                  verticalAlign: "middle",
                                }}
                              />
                            </span>
                          ))}
                        </div>
                      ) : (
                        row[header]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default CSVDataTable;
