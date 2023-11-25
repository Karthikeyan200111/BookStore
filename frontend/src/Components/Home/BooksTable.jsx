import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BooksTable = ({ books }) => {
  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>No</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Author</th>
            <th style={tableHeaderStyle}>Publish Year</th>
            <th style={tableHeaderStyle}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} style={tableRowStyle}>
              <td style={tableCellStyle}>{index + 1}</td>
              <td style={tableCellStyle}>{book.title}</td>
              <td style={tableCellStyle}>{book.author}</td>
              <td style={tableCellStyle}>{book.publishYear}</td>
              <td style={tableCellStyle}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle style={iconStyle} />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit style={iconStyle} />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete style={iconStyle} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableContainerStyle = {
  padding: '16px', // Adjusted padding for the table container
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1em',
  marginBottom: '1em',
};

const tableHeaderStyle = {
  backgroundColor: '#dce068',
  padding: '12px',
  border: '1px solid #201e1e',
  textAlign: 'center',
};

const tableRowStyle = {
  backgroundColor: '#b6b9b5',
  border: '1px solid #101010',
};

const tableCellStyle = {
  padding: '12px',
  border: '1px solid #010101',
  textAlign: 'center',
};

const iconStyle = {
  fontSize: '20px',
  color: '#333',
};

export default BooksTable;
