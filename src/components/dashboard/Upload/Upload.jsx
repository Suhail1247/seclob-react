import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import excel from "../../../assets/Excel.png"
import { LuUpload } from "react-icons/lu";
import { Box } from '@mui/system';
import papa from 'papaparse'

import CSVDataTable from './CSVDataTable';
import toast, { Toaster } from 'react-hot-toast';

function Upload() {
    const [loading, setLoading] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [fileData, setFileData] = useState(null);
    const [csvData, setCsvData] = useState([]);
    const [uploaded, setUploaded] = useState(false);

    const handleUpload = () => {
        try {
            if (fileData) {
                setLoading(true);
                papa.parse(fileData,{
                    download: true,
                    delimiter: ",",
                    complete: (result) => {
                        const lines = result.data;
                        console.log(lines);
                        const headers = lines[0];
                        const parsedData = [];
                        for (let i = 1; i < lines.length; i++) {
                            const currentLine = lines[i];
                            if (currentLine.length === headers.length) {
                                const row = {};
                                for (let j = 0; j < headers.length; j++) {
                                    row[headers[j].trim()] = currentLine[j].trim();
                                }
                                parsedData.push(row);
                            } else {
                                console.log('Row has different number of columns than headers:', currentLine);
                            }
                        }
                        setCsvData(parsedData);
                    }
                })
                setTimeout(() => {
                    setLoading(false);
                    setUploaded(true);
                }, 1000);
            } else {
                toast.error('please select a file to upload');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            console.log(csvData);
        }, 4000);
    }, [csvData]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setUploadedFileName(file.name);
        setFileData(file); // Store the file data in state
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setUploadedFileName(file.name);
        setFileData(file); // Store the file data in state
    };

    return (
        <>
        <Toaster/>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!uploadedFileName && (
                <input
                    type="file"
                    id="upload"
                    name="upload"
                    accept=".xlsx,.csv"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            )}
            <Box
                sx={{
                    width: '40vw',
                    height: '18vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'dashed gray 1px'
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={excel} alt="Excel Icon" />
                </Box>
                <Box sx={{ fontSize: '1.4vw' }}>
                    {uploadedFileName ? (
                        <Typography sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                           <span style={{color:'rgba(153, 156, 160, 1)'}}> {uploadedFileName}</span> <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => { setUploadedFileName(''); setFileData(null); setUploaded(false) }}>Remove</span>
                        </Typography>
                    ) : (
                        <label htmlFor="upload">
                        <span style={{color:'rgba(153, 156, 160, 1)'}}>     Drop your excel sheet here or </span><span style={{ color: 'blue', cursor: 'pointer' }}>browse</span>
                        </label>
                    )}
                </Box>
            </Box>
            <Box sx={{mt:2}}>
                <Button
                    onClick={handleUpload}
                    variant="contained"
                    color="primary"
                    disabled={loading || uploaded}
                    startIcon={!loading && <LuUpload />}
                    style={{ width: '40vw', borderRadius: '10px', backgroundColor: "rgba(96, 91, 255, 1)", opacity: uploaded && '40%' }}
                >
                    {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Upload'}
                </Button>
            </Box>
            {uploaded&&
            <Box>
                <CSVDataTable data={csvData} />
            </Box>}
        </Box>
        </>
    );
}

export default Upload;
