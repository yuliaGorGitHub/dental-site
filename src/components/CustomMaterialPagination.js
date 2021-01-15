import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import { IconButton, TablePagination } from '@material-ui/core';
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage } from '@material-ui/icons';

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
	const handleFirstPageButtonClick = () => {
		onChangePage(0);
	};

	const handleBackButtonClick = () => {
		onChangePage(page-1);
	};

	const handleNextButtonClick = () => {
		onChangePage(Number(page) + 1);
	
	};

	const handleLastPageButtonClick = () => {
		onChangePage(getNumberOfPages(count, rowsPerPage)-1);		
	};

	const getNumberOfPages = (rowCount, rowsPerPage) => Math.ceil(rowCount / rowsPerPage);


	const useStyles = makeStyles({  
        padding:    {
            paddingTop: 0,
            paddingBottom: 0,
        },
     }); 

     const classes = useStyles();

	return (
		<>
			<IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} 
				className={classes.padding} 
				aria-label="first page">
				<LastPage />
			</IconButton>
			<IconButton onClick={handleBackButtonClick} disabled={page === 0} 
				className={classes.padding} 
				aria-label="previous page">
				<KeyboardArrowRight />
			</IconButton>	
			<IconButton
				className={classes.padding} 
				onClick={handleNextButtonClick}
				disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
				aria-label="next page">
				<KeyboardArrowLeft />
			</IconButton>
			<IconButton
				className={classes.padding} 
				onClick={handleLastPageButtonClick}
				disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
				aria-label="last page">
				<FirstPage />
			</IconButton>			
		</>
	);
}

const CustomMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (	  
	<TablePagination 
		labelRowsPerPage='שורות בדף:'
		component="nav"
		count={rowCount}
		rowsPerPage={rowsPerPage}
		rowsPerPageOptions={[3, 6, 9]}  
		page={currentPage}
		labelDisplayedRows={({ from, to, count }) => ` הצגת שורות ${from}-${to} סה"כ ${count} שורות`} 
		onChangePage={onChangePage}
		onChangeRowsPerPage={ e => onChangeRowsPerPage(Number(e.target.value))}
		SelectProps={{
			native: true,
		  }}
		ActionsComponent={TablePaginationActions}
	/>
	
	);

export default CustomMaterialPagination;
